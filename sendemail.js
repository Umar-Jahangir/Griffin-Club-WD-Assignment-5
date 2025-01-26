// Import required libraries
const sgMail = require('@sendgrid/mail');

// Set your SendGrid API key (make sure to keep this secure)
sgMail.setApiKey('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');

// Define the email details
const msg = {
  to: ['megaladon1427@gmail.com'], // List of recipients
  from: 'umarjahangir39@gmail.com', // Your verified SendGrid email
  subject: 'New Event Notification', // Email subject
  text: 'This is a notification about a new event that has been scheduled. Check the details below.', // Email body text
  html: `
    <p><strong>Event Name:</strong> Workshop on Aeronautics</p>
    <p><strong>Date:</strong> December 20, 2024</p>
    <p><strong>Time:</strong> 10:00 AM</p>
    <p><strong>Location:</strong> VIT Auditorium</p>
    <p><strong>Details:</strong> Join us for an informative workshop on aeronautics and aircraft technology.</p>
    <p><a href="register.html"><button>Register here</button></a></p>
  `, // Email body HTML content
};

// Send the email
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent successfully!');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
