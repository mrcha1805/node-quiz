const FSDB = require('file-system-db');
const db = new FSDB('./db.json', false);
const createContact = (req, res) => {
  try {
    console.log('create user contact');
    const key = req.body.group;
    db.push(key, {
      data: req.body,
      contact: req.body.nickname
    });
    res.status(201).send({
      result: req.body
    });
  } catch (err) {
    res.status(500).send({
      message: err
    });
  }
};

const createGroup = (req, res) => {
  try {
    console.log('create group');
    const key = 'group' + req.body.groupname;
    db.set(key, req.body.groupname);
    const result = db.get(key);
    res.status(201).send({
      group: result
    });
  } catch (err) {
    res.status(500).send({
      message: err
    });
  }
};

const getGroup = (req, res) => {
  try {
    console.log('get group');
    const responseData = [];
    const result = db.startsWith('group');
    result.forEach(item => {
      const data = db.get(item.data);
      const count = data.length;
      const groupItem = {
        group: item.data,
        contactCount: count,
        detail: data
      };
      responseData.push(groupItem);
    });
    res.status(200).send({
      result: responseData
    });
  } catch (err) {
    res.status(500).send({
      message: err
    });
  }
};

module.exports = { createContact, createGroup, getGroup }
