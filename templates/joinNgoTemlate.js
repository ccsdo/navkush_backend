const sendmail = require("../config/emailSetup");

const joinNgoTemplate=(data)=>{
const { authorizedPerson, organizationName, organizationType, organizationEmail ,authorizedPersonEmail,website,workingArea,mobile,phone,address,city,state,country,zipCode,occupation,panCard,registrationCertificate,bylaws,auditReport,annualReport,certificate80G} = data;
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
        <h2>New Join NGO Form Submission</h2>

        <p><span class="label">Authorized Person:</span> ${authorizedPerson || ''}</p>
        <p><span class="label">Organization Name:</span> ${organizationName || ''}</p>
        <p><span class="label">Organization Type:</span> ${organizationType || ''}</p>
        <p><span class="label">Email:</span> ${organizationEmail || ''}</p>
        <p><span class="label">Phone:</span> ${phone || ''}</p>
        <p><span class="label">Contact Person:</span> ${authorizedPersonEmail || ''}</p>
        <p><span class="label">Website:</span> ${website || ''}</p>
        <p><span class="label">Working Area:</span> ${workingArea || ''}</p>
        <p><span class="label">Mobile:</span> ${mobile || ''}</p>
        <p><span class="label">Address:</span> ${address || ''}</p>
        <p><span class="label">City:</span> ${city || ''}</p>
        <p><span class="label">State:</span> ${state || ''}</p>
        <p><span class="label">Country:</span> ${country || ''}</p>
        <p><span class="label">ZIP Code:</span> ${zipCode || ''}</p>
        <p><span class="label">Occupation:</span> ${occupation || ''}</p>
        <p><span class="label">PAN Card:</span> <a href="${panCard || ''}">${panCard || ''}</a></p>
        <p><span class="label">Registration Certificate:</span> <a href="${registrationCertificate || ''}">${registrationCertificate || ''}</a></p>
        <p><span class="label">Bylaws:</span> <a href="${bylaws || ''}">${bylaws || ''}</a></p>
        <p><span class="label">Audit Report:</span> <a href="${auditReport || ''}">${auditReport || ''}</a></p>
        <p><span class="label">Annual Report:</span> <a href="${annualReport || ''}">${annualReport || ''}</a></p>
        <p><span class="label">80G Certificate:</span> <a href="${certificate80G || ''}">${certificate80G || ''}</a></p>
     

        <div class="footer">
            &copy; ${year} navkush org. All rights reserved.
        </div>
    </div>
</body>
</html>`
        sendmail(emailText,`New Join NGO Form Submission ${organizationEmail}`);


}

module.exports = joinNgoTemplate;