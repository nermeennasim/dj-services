import sgMail from '@sendgrid/mail';
import dotenv from "dotenv";
dotenv.config();


if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  message: string;
}

// Fix the PUBLIC_BASE_URL logic
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://www.blktieevents.com' 
    : 'https://www.blktieevents.com'
    
    // Your frontend port//add another port to PUBLIC Base URL?
  );
  //add another port to PUBLIC Base URL?/

const LOGO_PRIMARY = `${PUBLIC_BASE_URL}/logo.png`;
const LOGO_WORDMARK_ON_BLACK = `${PUBLIC_BASE_URL}/logo_cursive_black_tie_events_black_background.png`;


const BRAND = {
  name: 'Black Tie Events',
  site: 'https://www.blktieevents.com',
  email: 'blktieevent@gmail.com',
  phone: '(909) 268-1246',
  whatsapp: 'https://wa.me/19092681246',
  calendly: 'https://calendly.com/blktieevent/welcome-to-black-tie-events',
  socials: {
    facebook: 'https://facebook.com/BLKTIE.EVENTS',
    instagram: 'https://instagram.com/BLKTIE_EVENT',
    x: 'https://x.com/BLKTIE_EVENT',
    whatsapp: 'https://wa.me/19092681246',
  },
};

class EmailService {
  private fromEmail = process.env.FROM_EMAIL || BRAND.email;
  private toEmail = BRAND.email;

  // ---------- HTML BUILDERS ----------
  private wrap = (innerHtml: string) => `
    <div style="margin:0;padding:0;background:#ffffff;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background:#ffffff;">
        <tr>
          <td align="center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="width:600px; max-width:100%;">
              <!-- Header -->
              <tr>
                <td style="background:#000000;padding:28px 24px;text-align:center;">
                  <img src="${LOGO_WORDMARK_ON_BLACK}" alt="${BRAND.name}" style="height:60px;max-width:100%;display:inline-block;" />
                </td>
              </tr>

              ${innerHtml}

              <!-- Footer -->
              <tr>
                <td style="background:#000000;color:#9ca3af;padding:24px;text-align:center;">
                  <div style="margin-bottom:12px;">
                    <img src="${LOGO_WORDMARK_ON_BLACK}" alt="${BRAND.name}" style="height:40px;opacity:0.95;display:inline-block;" />
                  </div>
                  <div style="font-size:12px;line-height:1.6;color:#d1d5db;">
                    <div style="margin:6px 0;">
                      <a href="${BRAND.site}" style="color:#d1d5db;text-decoration:none;">${BRAND.site}</a>
                    </div>
                    <div style="margin:6px 0;">${new Date().getFullYear()} © ${BRAND.name}. All rights reserved.</div>
                  </div>

                  <!-- Social links -->
                  <div style="margin-top:14px;">
                    <a href="${BRAND.socials.facebook}" style="color:#d1d5db;text-decoration:none;margin:0 8px;">Facebook</a>
                    <a href="${BRAND.socials.instagram}" style="color:#d1d5db;text-decoration:none;margin:0 8px;">Instagram</a>
                    <a href="${BRAND.socials.x}" style="color:#d1d5db;text-decoration:none;margin:0 8px;">X</a>
                    <a href="${BRAND.socials.whatsapp}" style="color:#d1d5db;text-decoration:none;margin:0 8px;">WhatsApp</a>
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  private block = (content: string) => `
    <tr>
      <td style="background:#ffffff;padding:0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td style="padding:28px 24px;border-left:1px solid #E5E7EB;border-right:1px solid #E5E7EB;border-bottom:1px solid #E5E7EB;">
              ${content}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;

  private adminHtml = (data: ContactFormData) => {
    const { name, email, phone, eventType, eventDate, message } = data;
    const detailsRows = [
      ['Name', name],
      ['Email', email],
      phone ? ['Phone', phone] : null,
      eventType ? ['Event Type', eventType] : null,
      eventDate ? ['Event Date', eventDate] : null,
    ].filter(Boolean) as [string, string][];

    const detailsTable = `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
        ${detailsRows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:10px 0;font-weight:700;color:#111827;width:32%;">${k}:</td>
            <td style="padding:10px 0;color:#4B5563;">${this.escape(v)}</td>
          </tr>`
          )
          .join('')}
      </table>
    `;

    const body = `
      ${this.block(`
        <div style="text-align:center;">
          <img src="${LOGO_PRIMARY}" alt="${BRAND.name}" style="height:54px;margin-bottom:12px;" />
          <h2 style="margin:8px 0 0 0;font-size:22px;line-height:1.2;color:#111827;font-weight:800;">
            New Booking Inquiry
          </h2>
          <div style="color:#6B7280;font-size:13px;margin-top:4px;">Submitted ${new Date().toLocaleString()}</div>
        </div>
      `)}

      ${this.block(`
        <h3 style="margin:0 0 12px 0;color:#111827;font-size:16px;font-weight:800;">Contact Details</h3>
        ${detailsTable}
      `)}

      ${this.block(`
        <h3 style="margin:0 0 10px 0;color:#111827;font-size:16px;font-weight:800;">Message</h3>
        <div style="background:#F3F4F6;padding:16px;border-radius:8px;border-left:4px solid #111827;color:#111827;white-space:pre-wrap;">
          ${this.escape(message)}
        </div>
        <div style="margin-top:16px;font-size:13px;color:#4B5563;">
          Reply directly to this email to reach the client.
        </div>
        <div style="margin-top:20px;color:#111827;font-weight:700;">
          Regards,<br/>Oscar Perez @ ${BRAND.name}
        </div>
      `)}
    `;

    return this.wrap(body);
  };

  private autoReplyHtml = (clientName: string) => {
    const body = `
      ${this.block(`
        <div style="text-align:center;">
          <img src="${LOGO_PRIMARY}" alt="${BRAND.name}" style="height:54px;margin-bottom:12px;" />
          <h2 style="margin:8px 0 0 0;font-size:22px;line-height:1.2;color:#111827;font-weight:800;">
            Thank you, ${this.escape(clientName)}!
          </h2>
          <p style="margin:10px 0 0 0;color:#6B7280;font-size:14px;">
            We’ve received your inquiry. Our team will respond within 24 hours with recommendations and pricing.
          </p>
        </div>
      `)}

      ${this.block(`
        <h3 style="margin:0 0 10px 0;color:#111827;font-size:16px;font-weight:800;">What happens next?</h3>
        <ul style="margin:0;padding-left:18px;color:#4B5563;line-height:1.7;">
          <li>We review your event details within a few hours</li>
          <li>We match your vibe with the right DJ experience</li>
          <li>You’ll get a personal reply within 24 hours</li>
        </ul>
        <div style="text-align:center;margin-top:18px;">
          <a href="${BRAND.calendly}" style="background:#111827;color:#ffffff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block;">
            Schedule a Free Consultation
          </a>
        </div>
        <div style="margin-top:20px;color:#111827;font-weight:700;">
          Regards,<br/>Oscar Perez @ ${BRAND.name}
        </div>
      `)}

      ${this.block(`
        <div style="background:#F9FAFB;padding:14px;border-radius:8px;">
          <div style="color:#111827;font-weight:700;margin-bottom:6px;">Need help now?</div>
          <div style="color:#4B5563;font-size:14px;line-height:1.7;">
            📞 <a href="tel:+19092681246" style="color:#4B5563;text-decoration:none;">${BRAND.phone}</a><br/>
            💬 <a href="${BRAND.whatsapp}" style="color:#4B5563;text-decoration:none;">WhatsApp Chat</a>
          </div>
        </div>
      `)}
    `;
    return this.wrap(body);
  };

  private adminText = (data: ContactFormData) => {
    const { name, email, phone, eventType, eventDate, message } = data;
    return [
      `New Booking Inquiry - ${BRAND.name}`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      eventType ? `Event Type: ${eventType}` : null,
      eventDate ? `Event Date: ${eventDate}` : null,
      ``,
      `Message:`,
      message,
      ``,
      `Regards,`,
      `Oscar Perez @ ${BRAND.name}`,
      ``,
      `Visit: ${BRAND.site}`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  private autoReplyText = (clientName: string) =>
    [
      `Thank you, ${clientName}!`,
      `We’ve received your inquiry at ${BRAND.name}. We’ll reply within 24 hours with recommendations and pricing.`,
      ``,
      `Need help now?`,
      `Phone: ${BRAND.phone}`,
      `WhatsApp: ${BRAND.whatsapp}`,
      ``,
      `Schedule: ${BRAND.calendly}`,
      ``,
      `Regards,`,
      `Oscar Perez @ ${BRAND.name}`,
    ].join('\n');

  // ---------- PUBLIC METHODS ----------
 // In emailService.ts, modify the sendContactFormEmail method:
async sendContactFormEmail(data: ContactFormData, options?: {
    publicBaseUrl?: string;
    logoPrimary?: string;
    logoWordmarkOnBlack?: string;
  }): Promise<boolean> {
  console.log('=== EMAIL SERVICE DEBUG ===');
  console.log('PUBLIC_BASE_URL:', PUBLIC_BASE_URL);
  console.log('LOGO_PRIMARY:', LOGO_PRIMARY);
  console.log('LOGO_WORDMARK_ON_BLACK:', LOGO_WORDMARK_ON_BLACK);
  console.log('Form data:', data);
  
  try {
    const { name, email, eventType, eventDate } = data;

    // Admin email
    console.log('Sending admin email to:', this.toEmail);
    await sgMail.send({
      to: this.toEmail,
      from: this.fromEmail,
      replyTo: email,
      subject: `New Booking: ${name}${eventType ? ' • ' + eventType : ''}${eventDate ? ' on ' + eventDate : ''}`,
      html: this.adminHtml(data),
      text: this.adminText(data),
    });

    console.log('Admin email sent successfully');

    // Auto-reply to client
    console.log('Sending auto-reply to:', email);
    await this.sendAutoReply(email, name);
    console.log('Auto-reply sent successfully');

    return true;
  } catch (error) {
    console.error('Email service error:', error);
    return false;
  }
}

  private async sendAutoReply(clientEmail: string, clientName: string): Promise<void> {
    try {
      await sgMail.send({
        to: clientEmail,
        from: this.fromEmail,
        subject: `Thanks for contacting ${BRAND.name}`,
        html: this.autoReplyHtml(clientName),
        text: this.autoReplyText(clientName),
      });
    } catch (error) {
      console.error('Auto-reply failed:', error);
      // swallow
    }
  }

  // ---------- HELPERS ----------
  private escape(str: string) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

export const emailService = new EmailService();
