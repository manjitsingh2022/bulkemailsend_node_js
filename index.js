const fs = require('fs');
const path = require('path');
const transporter = require('./config');
const recipients = require('./recipients');

// const recipients = [
//   'ebsharpreetkaur@gmail.com',
//   'sudhir.dadwal@gmail.com',
//   'manjitp95@gmail.com',
//   'ebsmanjitsingh@gmail.com',
//   // Add more Gmail addresses
// ];

const templatePath = path.join(__dirname, 'templates', 'email.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

// Function to delay sending (throttle)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  for (const email of recipients) {
    const mailOptions = {
      from: `"My App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '📧 Bulk Mail Test',
      html: templateHtml,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`✅ Email sent to ${email}:`, info.response);
    } catch (error) {
      console.error(`❌ Failed to send to ${email}:`, error.message);
    }

    // wait 2 seconds before sending next email
    await delay(2000);
  }
})();
