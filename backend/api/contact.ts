import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, message, phone, eventType, eventDate } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Admin email HTML
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; color: white; text-align: center;">
          <h2 style="margin: 0;">🎵 New DJ Booking Inquiry</h2>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <div style="background: white; padding: 25px; border-radius: 10px;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${eventType ? `<p><strong>Event Type:</strong> ${eventType}</p>` : ''}
            ${eventDate ? `<p><strong>Event Date:</strong> ${eventDate}</p>` : ''}
            <h4>Message:</h4>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Send admin email
    await sgMail.send({
      to: 'blktieevent@gmail.com',
      from: process.env.FROM_EMAIL || 'noreply@yourdjdomain.com',
      replyTo: email,
      subject: `🎵 New DJ Booking: ${name} - ${eventType || 'Event'}`,
      html: adminEmailHtml,
    });

    // Send auto-reply
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Black Tie Events</h1>
        </div>
        <div style="padding: 30px;">
          <h2>Thank you, ${name}! 🎉</h2>
          <p>We've received your inquiry and will get back to you within 24 hours.</p>
          <p>📞 Need immediate assistance? Call us at <a href="tel:+19092681246">(909) 268-1246</a></p>
        </div>
      </div>
    `;

    await sgMail.send({
      to: email,
      from: process.env.FROM_EMAIL || 'noreply@yourdjdomain.com',
      subject: 'Thanks for contacting Black Tie Events! 🎵',
      html: autoReplyHtml,
    });

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
}