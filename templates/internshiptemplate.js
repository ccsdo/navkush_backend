const sendmail = require("../config/emailSetup");

const internshipTemplate = (data)=>{
const { fullName,dob, gender, address,cityState,contactNumber,email,qualification,skills,internshipAreas,preferredHours,previousExperience} = data;
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
        <h2>New internship Form Submission</h2>

        <p><span class="label">Name:</span> ${fullName || ''}</p>
        <p><span class="label">Date of Birth:</span> ${dob || ''}</p>
        <p><span class="label">Gender:</span> ${gender || ''}</p>
        <p><span class="label">Address:</span> ${address || ''}</p>
        <p><span class="label">City/State:</span> ${cityState || ''}</p>
        <p><span class="label">Contact Number:</span> ${contactNumber    || ''}</p>
        <p><span class="label">Email:</span> ${email || ''}</p>
        <p><span class="label">Mobile:</span> ${contactNumber || ''}</p> 
        <p><span class="label">Qualification:</span> ${qualification || ''}</p>
        <p><span class="label">Skills:</span> ${skills || ''}</p>
        <p><span class="label">Internship Areas:</span> ${internshipAreas || ''}</p>
        <p><span class="label">Preferred Hours:</span> ${preferredHours || ''}</p>
        <p><span class="label">Previous Experience:</span> ${previousExperience || ''}</p>

        <div class="footer">
            &copy; ${year} navkush org. All rights reserved.
        </div>
    </div>
</body>
</html>`
        sendmail(emailText,`New get involve Form Submission ${fullName}`);


}

module.exports = internshipTemplate;