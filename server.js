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
