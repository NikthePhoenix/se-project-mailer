const nodemailer = require('nodemailer');
const config = require("./config");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: config.mail.user,
    pass: config.mail.pass,
  },
});

//transporter.verify().then(console.log).catch(console.error);
const from = config.mail.from;
transporter.sendMail({
    from: from, // sender address
    to: "nikgov23@gmail.com", // list of receivers
    subject: "Bot mail", // Subject line
    text: "This was not sent by a human being", // plain text body
    html: "<b>This was not sent by a human being</b>", // html body
  }).then(info => {
    console.log({info});
  }).catch(console.error);