const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'elitestormers123@gmail.com',
    pass: 'sjoy mvdr btup ezmu',
  },
});

//transporter.verify().then(console.log).catch(console.error);

transporter.sendMail({
    from: '"Your Name" <youremail@gmail.com>', // sender address
    to: "nikgov23@gmail.com", // list of receivers
    subject: "Medium @edigleyssonsilva ✔", // Subject line
    text: "There is a new article. It's about sending emails, check it out!", // plain text body
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
  }).then(info => {
    console.log({info});
  }).catch(console.error);