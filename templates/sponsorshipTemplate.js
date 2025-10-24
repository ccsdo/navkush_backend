const sendmail = require("../config/emailSetup");

const sponsorshipTemplate=(data)=>{
   const {
    organizationName,
    contactPerson,
    address,
    cityStateZip,
    contactNumber,
    email,
    website,

    // Sponsorship Details
    areas,
    areasOther,
    sponsorshipAmount,
    duration,
    preferredPaymentMode,

    // Acknowledgement
    acknowledge,
    preferredNameForAck,

    // Declaration
    declaration,
    confirmInfo,
    signature,
    date,

  }=data
//const { fullName, companyName, email, phone,mobile,address,city,state,country,zipCode,occupation,briefProfile} = data;
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
        <h2>New sponsorship Form Submission</h2>

        <p><span class="label">Organization Name:</span> ${organizationName || ''}</p>
        <p><span class="label">Contact Person:</span> ${contactPerson || ''}</p>
        <p><span class="label">Address:</span> ${address || ''}</p>
        <p><span class="label">cityStateZip:</span> ${cityStateZip || ''}</p>
        <p><span class="label">contactNumber:</span> ${contactNumber || ''}</p>
        <p><span class="label">email:</span> ${email || ''}</p>
        <p><span class="label">website:</span> ${website || ''}</p>
        <p><span class="label">areas:</span> ${areas || ''}</p>
        <p><span class="label">areasOther:</span> ${areasOther || ''}</p>
        <p><span class="label">sponsorshipAmount:</span> ${sponsorshipAmount || ''}</p>
        <p><span class="label">duration:</span> ${duration || ''}</p>
        <p><span class="label">preferredPaymentMode:</span> ${preferredPaymentMode || ''}</p>
        <p><span class="label">acknowledge:</span> ${acknowledge || ''}</p>
        <p><span class="label">preferredNameForAck:</span> ${preferredNameForAck || ''}</p>
        <p><span class="label">declaration:</span> ${declaration || ''}</p>
        <p><span class="label">confirmInfo:</span> ${confirmInfo || ''}</p>
        <p><span class="label">signature:</span> ${signature || ''}</p>
        <p><span class="label">date:</span> ${date || ''}</p>
     

        <div class="footer">
            &copy; ${year} navkush org. All rights reserved.
        </div>
    </div>
</body>
</html>`
        sendmail(emailText,`New Membership Form Submission ${organizationName}`);


}

module.exports = sponsorshipTemplate;