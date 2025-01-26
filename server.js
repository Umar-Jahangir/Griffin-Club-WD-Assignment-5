const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Configure email transporter (you'll need to set up your email service)
const transporter = nodemailer.createTransport({
    service: 'gmail',  //email service
    auth: {
        user: 'umarjahangir39@gmail.com',//emial ID
        pass: 'xhsd bjwe kzrw zfmu'//[password]
    }
});

// Database of student emails (in practice, this should be in a real database)
const studentEmails = [
    /*student emails*/
    'umar.jahangir24@vit.edu',
    'sidra.jahangir124@vit.edu',
    'sahil.jalgaonkar24@vit.edu',
    'jatin.jogale24@vit.edu'
];

app.post('/api/notices/new', async (req, res) => {
    try {
        const notice = req.body;
        
        // Create email content
        const emailContent = `
            New Event Notice!
            
            Event: ${notice.eventName}
            Date: ${notice.eventDate}
            Time: ${notice.eventTime}
            Location: ${notice.eventLocation}
            
            Details: ${notice.aboutTheEvent}
            
            Register now at: register.html
        `;

        // Send emails to all students
        const emailPromises = studentEmails.map(email => 
            transporter.sendMail({
                from: '"Team Griffin" <umarjahangir39@gmail.com>',
                to: email,
                subject: `New Event: ${notice.eventName}`,
                text: emailContent
            })
        );

        await Promise.all(emailPromises);

        res.json({ 
            success: true, 
            emailsSent: studentEmails.length 
        });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to send emails' 
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});