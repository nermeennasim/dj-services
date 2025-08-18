// src/app/api/send-black-tie-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Manual dotenv loading (backup solution)
import { config } from 'dotenv';
config({ path: '.env.local' });

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  console.log('🚀 Black Tie Events API called');
  
  try {
    const body: ContactFormData = await request.json();
    const { name, phone, email, message } = body;

    console.log('📧 Processing for:', name);

    // 🔍 DEBUG: Check environment variables
    console.log('🔍 Environment variable check:');
    console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'EXISTS' : 'MISSING');
    console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'EXISTS' : 'MISSING');
    
    if (process.env.GMAIL_USER) {
      console.log('GMAIL_USER value:', process.env.GMAIL_USER);
    }
    if (process.env.GMAIL_APP_PASSWORD) {
      console.log('GMAIL_APP_PASSWORD length:', process.env.GMAIL_APP_PASSWORD.length);
    }

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check Gmail credentials
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ Missing Gmail credentials');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Gmail credentials not found. Check .env.local file.',
          debug: {
            gmailUser: !!process.env.GMAIL_USER,
            gmailPassword: !!process.env.GMAIL_APP_PASSWORD,
            nodeEnv: process.env.NODE_ENV
          }
        },
        { status: 500 }
      );
    }

    console.log('✅ Gmail credentials found, creating transporter...');

    // Create transporter with detailed Gmail SMTP config
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('🔍 Testing SMTP connection...');
    
    // Test the connection
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified');
    } catch (smtpError: any) {
      console.error('❌ SMTP error:', smtpError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Gmail authentication failed. Check your app password.',
          smtpError: smtpError.message
        },
        { status: 500 }
      );
    }

    // Email content
    const emailContent = `
🎵 BLACK TIE EVENTS - New DJ Booking Inquiry

👤 CLIENT DETAILS:
Name: ${name}
Email: ${email}
Phone: ${phone}

💬 MESSAGE:
${message}

📅 Received: ${new Date().toLocaleString()}

---
Reply directly to this email to contact the client.
    `;

    console.log('📤 Sending email...');

    // Send email
    const mailOptions = {
      from: `"Black Tie Events Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🎵 New DJ Booking Inquiry from ${name}`,
      text: emailContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Inquiry sent successfully! We\'ll get back to you within 24 hours.',
      messageId: info.messageId
    });

  } catch (error: any) {
    console.error('❌ Detailed error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email: ' + error.message,
        errorDetails: {
          message: error.message,
          code: error.code,
          command: error.command
        }
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Black Tie Events Contact API',
    timestamp: new Date().toISOString(),
    envStatus: {
      gmailUser: !!process.env.GMAIL_USER,
      gmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      nodeEnv: process.env.NODE_ENV,
      gmailUserValue: process.env.GMAIL_USER || 'NOT_SET'
    }
  });
}