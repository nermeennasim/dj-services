// backend/src/routes/emailRoutes.ts
import { Router, Request, Response } from 'express';
import { emailService, ContactFormData } from '../services/emailService';

const router = Router();

// Rate limiting store (simple in-memory for now)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string, limit: number = 3, windowMs: number = 15 * 60 * 1000): boolean {
  const now = Date.now();
  const clientData = rateLimitStore.get(ip);

  if (!clientData || now > clientData.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (clientData.count >= limit) {
    return false;
  }

  clientData.count++;
  return true;
}

// Contact form submission
router.post('/contact', async (req: Request, res: Response) => {
  try {
    // Rate limiting - 3 requests per 15 minutes per IP
    const clientIP =
  (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
  req.socket.remoteAddress ||
  req.ip ||
  'unknown';
    // Validate required fields
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests from this IP. Please try again later.',
      });
    }
    const { name, email, message } = req.body as ContactFormData;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 50 characters.',
      });
    }

    if (message.length < 10 || message.length > 500) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 10 and 500 characters.',
      });
    }

    // Send email
    const emailSent = await emailService.sendContactFormEmail(req.body);

    if (!emailSent) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send your message. Please try again or call us directly.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again or contact us directly.',
    });
  }
});

// Health check
router.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    service: 'Email Service',
    timestamp: new Date().toISOString(),
  });
});

export default router;