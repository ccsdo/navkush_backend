const sendmail = require("../config/emailSetup");

const donationTemplate=(data)=>{
const { name, email, phone, dob, panNo, state, city,address,pincode,amount} = data;
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
        <h2>New donation  Form Submission</h2>

        <p><span class="label">Name:</span> ${name || ''}</p>
        <p><span class="label">Email:</span> ${email || ''}</p>
        <p><span class="label">Phone:</span> ${phone || ''}</p>
        <p><span class="label">Date of Birth:</span> ${dob || ''}</p>
        <p><span class="label">PAN No:</span> ${panNo || ''}</p>
        <p><span class="label">State:</span> ${state || ''}</p>
        <p><span class="label">City:</span> ${city || ''}</p>
        <p><span class="label">Address:</span> ${address || ''}</p>
        <p><span class="label">Pincode:</span> ${pincode || ''}</p>
        <p><span class="label">Amount:</span> ${amount || ''}</p>

        <div class="footer">
            &copy; ${year} navkush org. All rights reserved.
        </div>
    </div>
</body>
</html>`
try{sendmail(emailText,`New donation Form Submission ${name}`);}
catch(err){console.log("error in send mail",err)
    return
}
        
console.log("Donation email sent.");

}

module.exports = donationTemplate;