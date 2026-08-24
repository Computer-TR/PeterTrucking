# Peter Trucking

Website for Peter Trucking — a freight carrier serving hopper, dry van, and refrigerated hauling. Includes a public marketing site, a careers/application flow, and an admin dashboard for reviewing applications.

## Project Structure

```
PeterTrucking/
├── backend/     # Express + MongoDB API
├── frontend/    # React (Create React App) site
├── Applications/
└── Public/
```

## Tech Stack

**Backend**
- Node.js, Express
- MongoDB with Mongoose
- JWT auth (`jsonwebtoken`, `bcryptjs`)
- `express-validator` for request validation
- `nodemailer` for application email notifications
- `multer` + `pdfkit` for file/PDF handling
- Deployed on Vercel (`backend/vercel.json`)

**Frontend**
- React 18 (Create React App)
- React Router
- Tailwind CSS
- Axios

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev   # starts with nodemon on http://localhost:5000
```

Create a `backend/.env` with:

```
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
GMAIL_USER=your_gmail_address
GMAIL_APP_PASSWORD=your_gmail_app_password
APPLICATIONS_EMAIL=where_new_applications_should_be_sent
```

### Frontend

```bash
cd frontend
npm install
npm start     # starts on http://localhost:3000, proxies API calls to localhost:5000
```

## API

Base URL: `/api`

- `GET /api/health` — health check
- `POST /api/applications` — submit a job application (public)
- `GET /api/applications` — list applications (protected)
- Auth routes (`register`, `login`) exist under `backend/routes/authRoutes.js` for admin user management

## Deployment

This project is **live in production**. The frontend is deployed on Vercel, and the backend is deployed on Vercel as a serverless Express app. Changes should be tested locally before pushing.

## Credits

Developed by [AIOTA Labs](https://aiotalabs.com).
