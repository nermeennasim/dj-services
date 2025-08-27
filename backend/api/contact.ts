import type { VercelRequest, VercelResponse } from '@vercel/node';
import { emailService, ContactFormData } from '../src/services/emailService';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS (loose; tighten if you want)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const payload = req.body as ContactFormData;
    const ok = await emailService.sendContactFormEmail(payload);

    if (!ok) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send your message. Please try again or call us directly.',
      });
    }

    return res.status(200).json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    });
  } catch (err: any) {
    console.error('Serverless email error:', err?.message ?? err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
