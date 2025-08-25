import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes';

const app = express();

// --- Config ---
const PORT = Number(process.env.PORT) || 8000;

// CORS
const allowedOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser tools (like curl) with no origin
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true
  })
);

// Body parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Trust proxy (so req.ip works correctly behind reverse proxies)
app.set('trust proxy', true);

// --- Health root ---
app.get('/health', (_req, res) => {
  res.json({
    status: 'OK',
    service: 'Black Tie Events API',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// --- Mount routes under /api/emails ---
app.use('/api/emails', emailRoutes);

// --- 404 fallback ---
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Not Found' });
});

// --- Error handler ---
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error('Server error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
);

// --- Start ---
app.listen(PORT, () => {
  console.log(`✅ Email API listening on http://localhost:${PORT}`);
});
