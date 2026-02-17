// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// // const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');


// // Load env vars
// dotenv.config();

// // Connect to database
// // connectDB();

// // Route files
// const authRoutes = require('./routes/authRoutes');
// const applicationRoutes = require('./routes/applicationRoutes');

// const app = express();

// // Body parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Enable CORS
// app.use(cors());

// // Mount routes
// app.use('/api/auth', authRoutes);
// app.use('/api/applications', applicationRoutes);

// // Health check
// app.get('/api/health', (req, res) => {
//   res.json({ success: true, message: 'Server is running' });
// });

// // Error handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => {
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Error: ${err.message}`);
//   server.close(() => process.exit(1));
// });

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const authRoutes = require('./routes/authRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
// app.use(cors({
//   origin: process.env.FRONTEND_URL || '*',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, mobile apps, etc.)
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://peter-trucking-frontend.vercel.app',
    ];

    // Allow any preview deployment from your Vercel project
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
app.use('/api/auth', authRoutes);
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

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
  });
}
