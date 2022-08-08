// const express = require('express');
// const expressRoute = express();
// const { body } = require('express-validator');

// expressRoute.get('/api/sendemail1', (req, res) => {
//   console.log('send email1');
//   res.send(200);
// });

// expressRoute.post('/api/sendemail', [
//   body('from').isEmail(),
//   body('to').isEmail(),
//   body('message').isString()
// ], (req, res) => {
//   console.log('send email');
//   res.send(200);
// });

// expressRoute.listen(3000, () => {
//   console.log('Listening on port 3000');
// })

const express = require("express");

const app = express();
const PORT = 3000;
const emailRouter = require('./routes/email-router');
const taxRouter = require('./routes/tax-router');
const contactRouter = require('./routes/contact-router');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/sendemail', emailRouter);
app.use('/api/tax', taxRouter);
app.use('/api', contactRouter);
app.listen(PORT, () => console.log('Server listening on port', PORT));
