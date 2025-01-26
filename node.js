const sgMail = require('@sendgrid/mail');

// Set your API key
sgMail.setApiKey('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');

// Email sending function
const sendEmail = async ({ subject, body, recipients }) => {
    const msg = {
        to: recipients, // Array of recipient email addresses
        from: 'umarjahangir39@gmail.com', // Your verified sender email
        subject: subject,
        text: body,
    };

    try {
        const response = await sgMail.sendMultiple(msg); // Sends to multiple recipients
        console.log('Emails sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error.response.body);
    }
};

// Example usage
sendEmail({
    subject: 'Team Griffin Event Update',
    body: 'An exciting event is happening soon. Don\'t miss out!',
    recipients: ['megaladon1427@gmail.com'],
});
