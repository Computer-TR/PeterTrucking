const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

// Load env vars
dotenv.config();

// Route files
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://peter-trucking-frontend.vercel.app',
      'https://thepetercompanies.com',
    ];

    const isVercelPreview = /^https:\/\/peter-trucking-frontend.*\.vercel\.app$/.test(origin);
    const isAllowed = allowedOrigins.includes(origin) || isVercelPreview;

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Root route
app.get('/', (req, res) => {
  res.json({ 
    success: true, 
    message: 'PT-Web API is running',
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

// Mount routes
app.use('/api/applications', applicationRoutes);

// Error handler (must be last)
app.use(errorHandler);

// Export for Vercel
module.exports = app;

// Only start server locally (not on Vercel)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });

  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
  });
}
