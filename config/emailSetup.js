const nodemailer = require("nodemailer");
const connection=()=>{
    console.log("transporter")
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

return transporter;
}

const sendmail=async (emailText,subject)=>{
    console.log("sendmail")
 try {
    const transporter=connection()
    const d=await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL, // where emails go
      subject: subject,
      html: emailText,
    });
  
  } catch (error) {
    console.error(error);

  }
}


module.exports =sendmail