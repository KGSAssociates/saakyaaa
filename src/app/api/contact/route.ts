import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e293b; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">SAAKYA CONSOLIDATED LLC</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background-color: #f8fafc; border-left: 4px solid #2563eb;">
            <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569; width: 120px;">Name:</td>
                <td style="padding: 12px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 12px 0; color: #1e293b;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Company:</td>
                <td style="padding: 12px 0; color: #1e293b;">${company}</td>
              </tr>
              ` : ''}
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Subject:</td>
                <td style="padding: 12px 0; color: #1e293b;">${subject}</td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 30px; background-color: white;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; line-height: 1.6; color: #334155;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This email was sent from the SAAKYA CONSOLIDATED LLC contact form at 
              <a href="https://www.saakyaconsolidated.com" style="color: #2563eb;">saakyaconsolidated.com</a>
            </p>
            <p style="margin: 10px 0 0 0; color: #64748b; font-size: 12px;">
              Timestamp: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}