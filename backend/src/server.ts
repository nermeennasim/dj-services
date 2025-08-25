import express, { Request, Response } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import emailRoutes from './routes/emailRoutes';

const app = express();

// Trust proxy for Vercel
app.set('trust proxy', 1);

// CORS Configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://www.blktieevents.com', // Replace with your actual frontend URL
    'https://blktieevents.com',],
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
  },
});
app.use(limiter);

// Routes
app.use('/api/emails', emailRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    service: 'DJ Services Email API',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    sendgridConfigured: !!process.env.SENDGRID_API_KEY
  });
});

// Root route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'DJ Services Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      contact: '/api/emails/contact'
    }
  });
});

const PORT = process.env.PORT || 8000;

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📧 Email service ready`);
  });
}

// IMPORTANT: Export default for Vercel
export default app;