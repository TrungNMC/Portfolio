import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // Retrieve email credentials from environment variables for enhanced security
  const email = process.env.EMAIL;
  const emailPassword = process.env.EMAIL_PASS;

  // Validate missing or invalid credentials (optional, but recommended)
  if (!email || !emailPassword) {
    console.error(
      'Missing or invalid email credentials in environment variables.'
    );
    return NextResponse.json(
      { error: 'Error sending email. Please configure email credentials.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { from, to, subject, text } = body;

    // Create transporter with secure connection
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP server if different
      port: 587,
      secure: false, // Use TLS for secure connections
      auth: {
        user: email,
        pass: emailPassword,
      },
    });

    // Improved mail options with optional HTML content
    const mailOptions = {
      from,
      to,
      subject,
      text,
      html: `
      <h2>Title: ${subject}</h2>
      <p>From: ${from}</p>
      <p>Message: ${text}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      {
        headers: {
          'Access-Control-Allow-Origin': '*', // Replace with your allowed origin
          'Access-Control-Allow-Methods': 'POST', // Allow only POST
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error sending email. Please try again later.' },
      { status: 500 }
    );
  }
}
