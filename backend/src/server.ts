import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { emailService, ContactFormData } from './services/emailService';

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 8000;

// Single CORS configuration
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3000', 'http://localhost:8000,https://blktieevents.com', 'https://www.blktieevents.com', 'https://blktieevents-backend-api.vercel.app/api'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200 // For legacy browser support
}));

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));

// Handle preflight requests explicitly
app.options('*', cors());

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form submission:', {
      name: req.body.name,
      email: req.body.email,
      hasMessage: !!req.body.message
    });

    const result = await emailService.sendContactFormEmail(req.body as ContactFormData);
    
    if (!result) {
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: "Thank you for your message! We'll get back to you within 24 hours." 
    });

  } catch (err: any) {
    console.error('Contact form error:', err?.message ?? err);
    res.status(500).json({ 
      success: false, 
      message: 'Internal Server Error. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'DJ Services Email API',
    timestamp: new Date().toISOString(),
    sendgridConfigured: !!process.env.SENDGRID_API_KEY,
    publicBaseUrl: process.env.PUBLIC_BASE_URL ?? null,
  });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Local server running at http://localhost:${PORT}`);
    console.log(`📧 SendGrid configured: ${!!process.env.SENDGRID_API_KEY}`);
    console.log(`🌐 CORS enabled for: http://localhost:3001, http://localhost:3000`);
  });
}

export default app;