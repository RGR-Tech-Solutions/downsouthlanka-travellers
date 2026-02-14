"use server";

import nodemailer from 'nodemailer';

export async function sendEmail({
    subject,
    text,
    html,
    attachments
}: {
    subject: string;
    text: string;
    html: string;
    attachments?: Array<{ filename: string; content?: string | Buffer; path?: string }>;
}) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Sending it to ourselves
        subject: subject,
        text: text,
        html: html,
        attachments: attachments,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
