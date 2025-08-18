import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, phone, email, message } = body;

		// Validate required fields
		if (!name || !phone || !email || !message) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 }
			);
		}

		// Simple email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 }
			);
		}

		// Save to database (if you have Prisma set up)
		// const contactSubmission = await db.contactSubmission.create({
		//   data: { name, phone, email, message, subject: 'Contact Form Submission' },
		// });

		// Send email to admin
		const adminEmailData = {
			from: process.env.FROM_EMAIL || " blktieevent@gmail.com",
			to: process.env.ADMIN_EMAIL || " blktieevent@gmail.com",
			subject: `New Contact Form Submission from ${name}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 20px;">
          <div style="background: linear-gradient(45deg, #fbbf24, #f59e0b); padding: 20px; text-align: center; margin-bottom: 30px; border-radius: 10px;">
            <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #fbbf24; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #fbbf24; margin-top: 0;">Message</h2>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #888;">Submitted: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
		};

		// Send confirmation email to client
		const clientEmailData = {
			from: process.env.FROM_EMAIL || "noreply@blktieevents.com",
			to: email,
			subject: "Thank you for contacting Black Tie Events!",
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 20px;">
          <div style="background: linear-gradient(45deg, #fbbf24, #f59e0b); padding: 20px; text-align: center; margin-bottom: 30px; border-radius: 10px;">
            <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: bold;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #fbbf24; margin-top: 0;">Hi ${name},</h2>
            <p>Thank you for contacting Black Tie Events. We've received your message and will get back to you within 24 hours.</p>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: #fbbf24; margin-top: 0;">Your Message:</h3>
            <p style="white-space: pre-wrap; font-style: italic;">"${message}"</p>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: #fbbf24; margin-top: 0;">Need Immediate Assistance?</h3>
            <p><strong>Phone:</strong> 909-268-1246</p>
            <p><strong>Email:</strong>  blktieevent@gmail.com</p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/19092681246" style="color: #fbbf24;">Chat with us</a></p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #888;">
            <p>Black Tie Events - Where Every Event Becomes Extraordinary</p>
          </div>
        </div>
      `,
		};

		// Send both emails
		await Promise.all([
			resend.emails.send(adminEmailData),
			resend.emails.send(clientEmailData),
		]);

		return NextResponse.json({
			success: true,
			message: "Message sent successfully",
			id: Math.random().toString(36).substr(2, 9), // Generate simple ID
		});
	} catch (error) {
		console.error("Error processing contact form:", error);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 }
		);
	}
}
