MongoDB:
PT-WebUser
PeterTrucking@web


test
PeterTruckingTest
## Installation Steps

```bash
# Create backend folder
mkdir backend
cd backend

# Initialize npm
npm init -y

# Install dependencies
npm install express mongoose dotenv bcryptjs jsonwebtoken cors express-validator nodemailer multer
npm install --save-dev nodemon
```

## Running the Backend

```bash
# Start MongoDB (if running locally)
mongod

# In another terminal, run the backend
cd backend
npm run dev
```

## Testing with Postman/Thunder Client

### 1. Register Admin User


```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Admin User",
  "email": "admin@petertrucking.com",
  "password": "admin123",
  "role": "admin"
}
```

### 2. Login
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@petertrucking.com",
  "password": "admin123"
}
```
Copy the token from response.

### 3. Submit Application (Public)
```bash
POST http://localhost:5000/api/applications
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "555-0123",
  "positionApplied": "Company Driver",
  "hasCDL": true,
  "cdlClass": "Class A",
  "yearsExperience": 5,
  "equipmentExperience": ["Dry Van", "Refrigerated"]
}
```

### 4. Get All Applications (Protected)
```bash
GET http://localhost:5000/api/applications
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## Next Steps
```bash
1. **File Upload**: We'll add multer configuration for resume/document uploads
2. **Email Notifications**: Configure nodemailer to send emails when applications are submitted
3. **More Validation**: Add express-validator rules for input validation

Let me know when you're ready and I'll help you set these up or we can move to the frontend!