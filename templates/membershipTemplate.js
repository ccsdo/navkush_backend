const sendmail = require("../config/emailSetup");

const membershipTemplate=(data)=>{
const { fullName, companyName, email, phone,mobile,address,city,state,country,zipCode,occupation,briefProfile} = data;
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
        <h2>New Membership Form Submission</h2>

        <p><span class="label">Authorized Person:</span> ${fullName || ''}</p>
        <p><span class="label">Organization Name:</span> ${companyName || ''}</p>
        <p><span class="label">Email:</span> ${email || ''}</p>
        <p><span class="label">Phone:</span> ${phone || ''}</p>
        <p><span class="label">Mobile:</span> ${mobile || ''}</p>
        <p><span class="label">Address:</span> ${address || ''}</p>
        <p><span class="label">City:</span> ${city || ''}</p>
        <p><span class="label">State:</span> ${state || ''}</p>
        <p><span class="label">Country:</span> ${country || ''}</p>
        <p><span class="label">ZIP Code:</span> ${zipCode || ''}</p>
        <p><span class="label">Occupation:</span> ${occupation || ''}</p>
        <p><span class="label">Brief Profile:</span> ${briefProfile || ''}</p>
     

        <div class="footer">
            &copy; ${year} navkush org. All rights reserved.
        </div>
    </div>
</body>
</html>`
        sendmail(emailText,`New Membership Form Submission ${fullName}`);


}

module.exports = membershipTemplate;