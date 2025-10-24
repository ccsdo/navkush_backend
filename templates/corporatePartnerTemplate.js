const sendmail = require("../config/emailSetup");

const corporatePartnerTemplate=(data)=>{
const { company, email, phone, message ,contact_person,partnership_type,company_size} = data;
const year = new Date().getFullYear();
  let emailText=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f6f9fc;
            margin: 0;
            padding: 20px
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
    </style>
</head>
<body>
    <div class="container">
        <h2>New corporate Partner Form Submission</h2>

        <p><span class="label">Company:</span> ${company || ''}</p>
        <p><span class="label">Email:</span> ${email || ''}</p>
        <p><span class="label">Phone:</span> ${phone || ''}</p>
        <p><span class="label">Contact Person:</span> ${contact_person || ''}</p>
        <p><span class="label">Partnership Type:</span> ${partnership_type || ''}</p>
        <p><span class="label">Company Size:</span> ${company_size || ''}</p>
        <p><span class="label">Message:</span></p>
        <p>${message || ''}</p>

        <div class="footer">
            &copy; ${year} navkush org. All rights reserved.
        </div>
    </div>
</body>
</html>`
        sendmail(emailText,`New corporate Partner Form Submission ${company}`);


}

module.exports = corporatePartnerTemplate;