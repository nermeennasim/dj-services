import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    status: 'OK',
    service: 'DJ Services Email API',
    timestamp: new Date().toISOString(),
    sendgridConfigured: !!process.env.SENDGRID_API_KEY,
    publicBaseUrl: process.env.PUBLIC_BASE_URL ?? null,
  });
}
