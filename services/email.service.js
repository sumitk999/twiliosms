const nodemailer = require("nodemailer");

//njgxroietmweaazn


exports.main= async(req,res)=> {
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'rvsharma2652@gmail.com', // generated ethereal user
      pass: 'vkenzoioggoduzmc', // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'sumit.kumar.antino@gmail.com', // sender address
    to: "sumit@antino.io", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  res.send(info)

}


