import nodemailer from 'nodemailer';
import 'dotenv/config'

const companyEmail = process.env.NEXT_PUBLIC_EMAIL_USER
const pass = process.env.NEXT_PUBLIC_EMAIL_APP_PASSWORD
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: companyEmail,
        pass,
    },
});

export type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    countryCode: string;
};

export async function sendContactEmail(data: ContactFormData) {
    const { firstName, lastName, email, phone, message } = data;

    const mailOptions = {
        from: companyEmail,
        to: companyEmail,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">New Contact Form Submission</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email. Please try again later.' };
    }
} 