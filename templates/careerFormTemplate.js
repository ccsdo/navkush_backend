const sendmail = require("../config/emailSetup");

const careerSchemaTemplate=(data)=>{
       console.log(data)
    const { name, email, phone, message, resume } = data;
  const year = new Date().getFullYear();
    let emailText=`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Career Form Submission</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f6f9fc;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        background-color: #ffffff;
        margin: auto;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      }
      h2 { color: #11616f; }
      p { font-size: 16px; line-height: 1.5; color: #333333; }
      .label { font-weight: bold; color: #11616f; }
      a { color: #11616f; text-decoration: none; }
      .footer { text-align: center; font-size: 12px; color: #888888; margin-top: 20px; }
      .resume-link {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 12px;
        background-color: #99a9acff;
        color: #ffffff;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>New Career Form Submission</h2>
      <p><span class="label">Name:</span> ${name || ''}</p>
      <p><span class="label">Email:</span> ${email || ''}</p>
      <p><span class="label">Phone:</span> ${phone || ''}</p>
      <p><span class="label">Message:</span></p>
      <p>${message || ''}</p>

      ${resume ? `<p><span class="label">Resume:</span></p>
      <a href="${resume}" class="resume-link" target="_blank">View/Download Resume</a>` : ''}

      <div class="footer">
        &copy; ${year} navkush org. All rights reserved.
      </div>
    </div>
  </body>
  </html>`
        sendmail(emailText,`New Career Form Submission ${name}`);


}

module.exports= careerSchemaTemplate