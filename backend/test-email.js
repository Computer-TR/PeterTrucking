const nodemailer = require('nodemailer');

console.log('Nodemailer loaded:', typeof nodemailer);
console.log('createTransporter exists:', typeof nodemailer.createTransport);

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'test@outlook.com',
    pass: 'testpass',
  }
});

console.log('Transporter created successfully!');