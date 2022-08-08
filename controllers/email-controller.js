const dotenv = require('dotenv');
dotenv.config();
const sendgridM = require('@sendgrid/mail');
const token = process.env['EMAIL_API_KEY'];
sendgridM.setApiKey(token);
const sendEmail = async (req, res, next) => {
  try {
    console.log('send email api');
    console.log(req.body);
    if (!req.body.from) {
      throw ('from');
    }

    if (!req.body.to) {
      throw ('to');
    }

    if (!req.body.message) {
      throw ('message');
    }
    let subjectMail;
    if (!req.body.subject) {
      subjectMail = 'default subject';
    } else {
      subjectMail = req.body.subject;
    }
    const requestMessage = {
      to: req.body.to,
      from: req.body.from,
      subject: subjectMail,
      text: req.body.message
    };
    console.log(JSON.stringify(requestMessage));
    await sendgridM.send(requestMessage);
    const resMessage = {
      message: `send email to ${req.body.to} success`
    };
    res.status(200).send(resMessage);
  } catch (err) {
    const diagnostic = err + ' parameter is required!';
    res.status(400).send({
      message: diagnostic
    });
  }
};

module.exports = { sendEmail }