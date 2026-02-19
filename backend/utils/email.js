// const nodemailer = require('nodemailer');

// // Create Gmail transporter
// const createTransport = () => {
//   return nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_APP_PASSWORD,
//     }
//   });
// };

// /**
//  * Send Driver Application Email
//  */
// const sendDriverApplication = async (applicationData, resumeFile) => {
//   const transport = createTransport();

//   const emailHTML = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 800px; margin: 0 auto; padding: 20px; }
//         .header { background-color: #dc2626; color: white; padding: 20px; text-center; }
//         .section { margin: 20px 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #dc2626; }
//         .section-title { font-size: 18px; font-weight: bold; color: #dc2626; margin-bottom: 10px; }
//         .field { margin: 10px 0; }
//         .field-label { font-weight: bold; color: #555; }
//         .field-value { margin-left: 10px; }
//         .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h1>New CDL-A Driver Application</h1>
//           <p>Peter Trucking LLC</p>
//         </div>

//         <div class="section">
//           <div class="section-title">Applicant Information</div>
//           <div class="field">
//             <span class="field-label">Name:</span>
//             <span class="field-value">${applicationData.firstName} ${applicationData.middleName || ''} ${applicationData.lastName}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Email:</span>
//             <span class="field-value">${applicationData.email}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Phone:</span>
//             <span class="field-value">${applicationData.phone}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Date of Birth:</span>
//             <span class="field-value">${applicationData.dateOfBirth}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Position:</span>
//             <span class="field-value">${applicationData.position}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Date Available:</span>
//             <span class="field-value">${applicationData.dateAvailable || 'Not specified'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Legal to Work in US:</span>
//             <span class="field-value">${applicationData.legalToWork === 'yes' ? 'Yes' : 'No'}</span>
//           </div>
//         </div>

//         <div class="section">
//           <div class="section-title">Current Address</div>
//           <div class="field">
//             <span class="field-value">
//               ${applicationData.currentStreet || ''}<br/>
//               ${applicationData.currentCity || ''}, ${applicationData.currentState || ''} ${applicationData.currentZip || ''}<br/>
//               Years at address: ${applicationData.currentYears || 'N/A'}
//             </span>
//           </div>
//         </div>

//         <div class="section">
//           <div class="section-title">License Information</div>
//           <div class="field">
//             <span class="field-label">State:</span>
//             <span class="field-value">${applicationData.licenseState || 'N/A'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">License #:</span>
//             <span class="field-value">${applicationData.licenseNumber || 'N/A'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Type/Class:</span>
//             <span class="field-value">${applicationData.licenseType || 'N/A'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Endorsements:</span>
//             <span class="field-value">${applicationData.licenseEndorsements || 'None'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Expiration:</span>
//             <span class="field-value">${applicationData.licenseExpiration || 'N/A'}</span>
//           </div>
//         </div>

//         ${applicationData.tractorSemiExp || applicationData.tankerExp ? `
//         <div class="section">
//           <div class="section-title">Driving Experience</div>
//           ${applicationData.tractorSemiExp ? `
//           <div class="field">
//             <span class="field-label">Tractor & Semi-Trailer:</span>
//             <span class="field-value">
//               ${applicationData.tractorSemiExp} | 
//               ${applicationData.tractorSemiDates || 'N/A'} | 
//               ${applicationData.tractorSemiMiles || 'N/A'} miles
//             </span>
//           </div>
//           ` : ''}
//           ${applicationData.tankerExp ? `
//           <div class="field">
//             <span class="field-label">Tanker:</span>
//             <span class="field-value">
//               ${applicationData.tankerExp} | 
//               ${applicationData.tankerDates || 'N/A'} | 
//               ${applicationData.tankerMiles || 'N/A'} miles
//             </span>
//           </div>
//           ` : ''}
//         </div>
//         ` : ''}

//         ${applicationData.accidents || applicationData.violations ? `
//         <div class="section">
//           <div class="section-title">Accident & Violation Record</div>
//           ${applicationData.accidents ? `
//           <div class="field">
//             <span class="field-label">Accidents:</span>
//             <span class="field-value">${applicationData.accidents}</span>
//           </div>
//           ` : ''}
//           ${applicationData.violations ? `
//           <div class="field">
//             <span class="field-label">Violations:</span>
//             <span class="field-value">${applicationData.violations}</span>
//           </div>
//           ` : ''}
//         </div>
//         ` : ''}

//         ${applicationData.currentEmployerName ? `
//         <div class="section">
//           <div class="section-title">Current Employer</div>
//           <div class="field">
//             <span class="field-label">Company:</span>
//             <span class="field-value">${applicationData.currentEmployerName}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Phone:</span>
//             <span class="field-value">${applicationData.currentEmployerPhone || 'N/A'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Position:</span>
//             <span class="field-value">${applicationData.currentPosition || 'N/A'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Duration:</span>
//             <span class="field-value">${applicationData.currentFromDate || 'N/A'} to ${applicationData.currentToDate || 'Present'}</span>
//           </div>
//         </div>
//         ` : ''}

//         ${applicationData.otherQualifications ? `
//         <div class="section">
//           <div class="section-title">Other Qualifications</div>
//           <div class="field">
//             <span class="field-value">${applicationData.otherQualifications}</span>
//           </div>
//         </div>
//         ` : ''}

//         <div class="section">
//           <div class="section-title">Application Details</div>
//           <div class="field">
//             <span class="field-label">Application Date:</span>
//             <span class="field-value">${applicationData.dateOfApplication}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Signature:</span>
//             <span class="field-value">${applicationData.applicantSignature}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Signature Date:</span>
//             <span class="field-value">${applicationData.signatureDate}</span>
//           </div>
//         </div>

//         <div class="footer">
//           <p>Peter Trucking LLC | 118576 County Road A, Athens, WI 54411</p>
//           <p>This application was submitted via the company website</p>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;

//   const mailOptions = {
//   from: process.env.GMAIL_USER,
//   to: process.env.APPLICATIONS_EMAIL || process.env.GMAIL_USER,
//   subject: `New Driver Application - ${applicationData.firstName} ${applicationData.lastName}`,
//   html: emailHTML,
//   replyTo: applicationData.email,
//   attachments: resumeFile ? [{
//     filename: resumeFile.originalname,
//     path: resumeFile.path
//   }] : []
// };

//   try {
//     const info = await transport.sendMail(mailOptions);
//     console.log('Driver application email sent:', info.messageId);
//     return { success: true, messageId: info.messageId };
//   } catch (error) {
//     console.error('Error sending driver application email:', error);
//     throw error;
//   }
// };

// /**
//  * Send General Application Email (Fleet Maintenance / Office)
//  */
// const sendGeneralApplication = async (applicationData, resumeFile) => {
//   const transport = createTransport();

//   const emailHTML = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 800px; margin: 0 auto; padding: 20px; }
//         .header { background-color: #dc2626; color: white; padding: 20px; text-center; }
//         .section { margin: 20px 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #dc2626; }
//         .section-title { font-size: 18px; font-weight: bold; color: #dc2626; margin-bottom: 10px; }
//         .field { margin: 10px 0; }
//         .field-label { font-weight: bold; color: #555; }
//         .field-value { margin-left: 10px; }
//         .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h1>New ${applicationData.positionApplied} Application</h1>
//           <p>Peter Trucking LLC</p>
//         </div>

//         <div class="section">
//           <div class="section-title">Applicant Information</div>
//           <div class="field">
//             <span class="field-label">Name:</span>
//             <span class="field-value">${applicationData.fullName}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Email:</span>
//             <span class="field-value">${applicationData.email}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Phone:</span>
//             <span class="field-value">${applicationData.phone}</span>
//           </div>
//           ${applicationData.mobile ? `
//           <div class="field">
//             <span class="field-label">Mobile/Other:</span>
//             <span class="field-value">${applicationData.mobile}</span>
//           </div>
//           ` : ''}
//           <div class="field">
//             <span class="field-label">Date of Birth:</span>
//             <span class="field-value">${applicationData.dateOfBirth}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Position Applied:</span>
//             <span class="field-value">${applicationData.positionApplied}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Date Available:</span>
//             <span class="field-value">${applicationData.dateAvailable || 'Not specified'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Salary Requirements:</span>
//             <span class="field-value">${applicationData.salaryRequirements || 'Not specified'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Referred By:</span>
//             <span class="field-value">${applicationData.referredBy || 'Not specified'}</span>
//           </div>
//         </div>

//         <div class="section">
//           <div class="section-title">Address</div>
//           <div class="field">
//             <span class="field-value">
//               ${applicationData.address || ''}<br/>
//               ${applicationData.city || ''}, ${applicationData.state || ''} ${applicationData.zip || ''}
//             </span>
//           </div>
//         </div>

//         <div class="section">
//           <div class="section-title">Employment Preferences</div>
//           <div class="field">
//             <span class="field-label">Employment Type:</span>
//             <span class="field-value">${applicationData.employmentType.join(', ')}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Legally Allowed to Work in US:</span>
//             <span class="field-value">${applicationData.legallyAllowed === 'yes' ? 'Yes' : 'No'}</span>
//           </div>
//         </div>

//         ${applicationData.highSchoolName || applicationData.collegeName || applicationData.tradeSchoolName ? `
//         <div class="section">
//           <div class="section-title">Education</div>
//           ${applicationData.highSchoolName ? `
//           <div class="field">
//             <span class="field-label">High School:</span>
//             <span class="field-value">${applicationData.highSchoolName} - Graduated: ${applicationData.highSchoolGraduate || 'N/A'}</span>
//           </div>
//           ` : ''}
//           ${applicationData.collegeName ? `
//           <div class="field">
//             <span class="field-label">College:</span>
//             <span class="field-value">${applicationData.collegeName} - Years: ${applicationData.collegeYears || 'N/A'}</span>
//           </div>
//           ` : ''}
//           ${applicationData.tradeSchoolName ? `
//           <div class="field">
//             <span class="field-label">Trade School:</span>
//             <span class="field-value">${applicationData.tradeSchoolName} - Years: ${applicationData.tradeSchoolYears || 'N/A'}</span>
//           </div>
//           ` : ''}
//         </div>
//         ` : ''}

//         ${applicationData.specialSkills ? `
//         <div class="section">
//           <div class="section-title">Special Skills & Qualifications</div>
//           <div class="field">
//             <span class="field-value">${applicationData.specialSkills}</span>
//           </div>
//         </div>
//         ` : ''}

//         ${applicationData.employment1CompanyName ? `
//         <div class="section">
//           <div class="section-title">Most Recent Employment</div>
//           <div class="field">
//             <span class="field-label">Company:</span>
//             <span class="field-value">${applicationData.employment1CompanyName}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Position:</span>
//             <span class="field-value">${applicationData.employment1Position || 'N/A'}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Duration:</span>
//             <span class="field-value">${applicationData.employment1From || 'N/A'} to ${applicationData.employment1To || 'Present'}</span>
//           </div>
//           ${applicationData.employment1Responsibilities ? `
//           <div class="field">
//             <span class="field-label">Responsibilities:</span>
//             <span class="field-value">${applicationData.employment1Responsibilities}</span>
//           </div>
//           ` : ''}
//           ${applicationData.employment1Supervisor ? `
//           <div class="field">
//             <span class="field-label">Supervisor:</span>
//             <span class="field-value">${applicationData.employment1Supervisor} - ${applicationData.employment1Title || ''}</span>
//           </div>
//           ` : ''}
//           <div class="field">
//             <span class="field-label">May Contact:</span>
//             <span class="field-value">${applicationData.employment1MayContact === 'yes' ? 'Yes' : 'No'}</span>
//           </div>
//         </div>
//         ` : ''}

//         <div class="section">
//           <div class="section-title">Application Details</div>
//           <div class="field">
//             <span class="field-label">Application Date:</span>
//             <span class="field-value">${applicationData.dateOfInterview}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Signature:</span>
//             <span class="field-value">${applicationData.applicantSignature}</span>
//           </div>
//           <div class="field">
//             <span class="field-label">Signature Date:</span>
//             <span class="field-value">${applicationData.signatureDate}</span>
//           </div>
//         </div>

//         <div class="footer">
//           <p>Peter Trucking LLC | 118576 County Road A, Athens, WI 54411</p>
//           <p>This application was submitted via the company website</p>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;

//   const mailOptions = {
//     from: process.env.GMAIL_USER,
//     to: process.env.APPLICATIONS_EMAIL || process.env.GMAIL_USER,
//     subject: `New ${applicationData.positionApplied} Application - ${applicationData.fullName}`,
//     html: emailHTML,
//     replyTo: applicationData.email,
//     attachments: resumeFile ? [{
//       filename: resumeFile.originalname,
//       path: resumeFile.path
//     }] : []
//   };

//   try {
//     const info = await transport.sendMail(mailOptions);
//     console.log('General application email sent:', info.messageId);
//     return { success: true, messageId: info.messageId };
//   } catch (error) {
//     console.error('Error sending general application email:', error);
//     throw error;
//   }
// };

// module.exports = {
//   sendDriverApplication,
//   sendGeneralApplication
// };

const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Create Gmail transporter
const createTransport = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    }
  });
};

// ─── PDF HELPERS ────────────────────────────────────────────────────────────

const addHeader = (doc, title) => {
  doc.rect(0, 0, doc.page.width, 70).fill('#dc2626');
  doc.fillColor('white').fontSize(20).font('Helvetica-Bold')
    .text(title, 40, 20);
  doc.fontSize(12).font('Helvetica')
    .text('Peter Trucking LLC', 40, 45);
  doc.fillColor('#333').moveDown();
  doc.y = 90;
};

const addSectionTitle = (doc, title) => {
  doc.moveDown(0.8);
  const y = doc.y;
  doc.rect(40, y, doc.page.width - 80, 22).fill('#dc2626');
  doc.fillColor('white').fontSize(12).font('Helvetica-Bold')
    .text(title, 45, y + 5, { width: doc.page.width - 90 });
  doc.fillColor('#333').font('Helvetica').fontSize(10);
  doc.y = y + 32;
};

const addField = (doc, label, value) => {
  if (value === undefined || value === null || value === '') return;
  const text = `${label}: ${String(value)}`;
  doc.font('Helvetica').fontSize(10).text(text, 45, doc.y, { 
    width: doc.page.width - 90,
    lineGap: 2
  });
  doc.moveDown(0.3);
};

const addFooter = (doc) => {
  doc.moveDown(2);
  doc.moveTo(40, doc.y).lineTo(doc.page.width - 40, doc.y).stroke('#e5e7eb');
  doc.moveDown(0.5);
  doc.fillColor('#6b7280').fontSize(9).font('Helvetica')
    .text('Peter Trucking LLC | 118576 County Road A, Athens, WI 54411', { align: 'center' })
    .text('This application was submitted via the company website', { align: 'center' });
};

const generateTempPath = (filename) => {
  return path.join(__dirname, '..', 'uploads', filename);
};

// ─── DRIVER APPLICATION PDF ─────────────────────────────────────────────────

const generateDriverPDF = (applicationData) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 40 });
    const filePath = generateTempPath(`driver-app-${Date.now()}.pdf`);
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    addHeader(doc, 'CDL-A Driver Application');

    // Personal Information
    addSectionTitle(doc, 'Personal Information');
    addField(doc, 'Name', `${applicationData.firstName} ${applicationData.middleName || ''} ${applicationData.lastName}`.trim());
    addField(doc, 'Email', applicationData.email);
    addField(doc, 'Phone', applicationData.phone);
    addField(doc, 'Date of Birth', applicationData.dateOfBirth);
    addField(doc, 'SSN (Last 4)', `***-**-${applicationData.ssnLast4}`);
    addField(doc, 'Position', applicationData.position);
    addField(doc, 'Date Available', applicationData.dateAvailable || 'Not specified');
    addField(doc, 'Legal to Work in US', applicationData.legalToWork === 'yes' ? 'Yes' : 'No');
    addField(doc, 'Application Date', applicationData.dateOfApplication);

    // Current Address
    addSectionTitle(doc, 'Current Address');
    addField(doc, 'Street', applicationData.currentStreet);
    addField(doc, 'City', applicationData.currentCity);
    addField(doc, 'State', applicationData.currentState);
    addField(doc, 'Zip', applicationData.currentZip);
    addField(doc, 'Years at Address', applicationData.currentYears);

    // License Information
    addSectionTitle(doc, 'License Information');
    addField(doc, 'State', applicationData.licenseState);
    addField(doc, 'License #', applicationData.licenseNumber);
    addField(doc, 'Type/Class', applicationData.licenseType);
    addField(doc, 'Endorsements', applicationData.licenseEndorsements || 'None');
    addField(doc, 'Expiration', applicationData.licenseExpiration);

    // Driving Experience
    addSectionTitle(doc, 'Driving Experience');
    addField(doc, 'Tractor & Semi-Trailer Experience', applicationData.tractorSemiExp);
    addField(doc, 'Tractor & Semi-Trailer Dates', applicationData.tractorSemiDates);
    addField(doc, 'Tractor & Semi-Trailer Miles', applicationData.tractorSemiMiles);
    addField(doc, 'Tanker Experience', applicationData.tankerExp);
    addField(doc, 'Tanker Dates', applicationData.tankerDates);
    addField(doc, 'Tanker Miles', applicationData.tankerMiles);

    // Accident & Violation Record
    addSectionTitle(doc, 'Accident & Violation Record');
    addField(doc, 'Accidents', applicationData.accidents || 'None reported');
    addField(doc, 'Violations', applicationData.violations || 'None reported');

    // Background Questions
    addSectionTitle(doc, 'Background Questions');
    addField(doc, 'License Ever Denied', applicationData.licenseDenied === 'yes' ? `Yes - ${applicationData.licenseDeniedExplain || ''}` : 'No');
    addField(doc, 'License Ever Suspended', applicationData.licenseSuspended === 'yes' ? `Yes - ${applicationData.licenseSuspendedExplain || ''}` : 'No');
    addField(doc, 'Criminal Conviction', applicationData.criminalConviction === 'yes' ? `Yes - ${applicationData.criminalConvictionExplain || ''}` : 'No');

    // Employment History
    if (applicationData.currentEmployerName) {
      addSectionTitle(doc, 'Current / Most Recent Employer');
      addField(doc, 'Company', applicationData.currentEmployerName);
      addField(doc, 'Phone', applicationData.currentEmployerPhone);
      addField(doc, 'Address', applicationData.currentEmployerAddress);
      addField(doc, 'Position', applicationData.currentPosition);
      addField(doc, 'From', applicationData.currentFromDate);
      addField(doc, 'To', applicationData.currentToDate || 'Present');
      addField(doc, 'Reason for Leaving', applicationData.currentLeaveReason);
    }

    // Education
    addSectionTitle(doc, 'Education');
    addField(doc, 'High School', applicationData.highSchoolName);
    addField(doc, 'High School Graduate', applicationData.highSchoolGraduate === 'yes' ? 'Yes' : applicationData.highSchoolGraduate === 'no' ? 'No' : 'N/A');
    addField(doc, 'College', applicationData.collegeName);
    addField(doc, 'College Graduate', applicationData.collegeGraduate === 'yes' ? 'Yes' : applicationData.collegeGraduate === 'no' ? 'No' : 'N/A');

    // Other Qualifications
    if (applicationData.otherQualifications) {
      addSectionTitle(doc, 'Other Qualifications');
      doc.font('Helvetica').fontSize(10).text(applicationData.otherQualifications, { width: doc.page.width - 80 });
    }

    // Signature
    addSectionTitle(doc, 'Signature');
    addField(doc, 'Signature', applicationData.applicantSignature);
    addField(doc, 'Signature Date', applicationData.signatureDate);

    addFooter(doc);
    doc.end();

    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
};

// ─── GENERAL APPLICATION PDF ────────────────────────────────────────────────

const generateGeneralPDF = (applicationData) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 40 });
    const filePath = generateTempPath(`general-app-${Date.now()}.pdf`);
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    addHeader(doc, `${applicationData.positionApplied} Application`);

    // Applicant Information
    addSectionTitle(doc, 'Applicant Information');
    addField(doc, 'Full Name', applicationData.fullName);
    addField(doc, 'Date of Birth', applicationData.dateOfBirth);
    addField(doc, 'SSN (Last 4)', `***-**-${applicationData.ssnLast4}`);
    addField(doc, 'Email', applicationData.email);
    addField(doc, 'Phone', applicationData.phone);
    addField(doc, 'Mobile/Other', applicationData.mobile);
    addField(doc, 'Position Applied', applicationData.positionApplied);
    addField(doc, 'Date Available', applicationData.dateAvailable || 'Not specified');
    addField(doc, 'Salary Requirements', applicationData.salaryRequirements || 'Not specified');
    addField(doc, 'Referred By', applicationData.referredBy || 'Not specified');

    // Address
    addSectionTitle(doc, 'Address');
    addField(doc, 'Street', applicationData.address);
    addField(doc, 'City', applicationData.city);
    addField(doc, 'State', applicationData.state);
    addField(doc, 'Zip', applicationData.zip);

    // Work Authorization
    addSectionTitle(doc, 'Work Authorization');
    addField(doc, 'Legally Allowed to Work in US', applicationData.legallyAllowed === 'yes' ? 'Yes' : 'No');
    addField(doc, 'Under 18 Work Permit', applicationData.under18WorkPermit === 'n/a' ? 'N/A (18 or older)' : applicationData.under18WorkPermit === 'yes' ? 'Yes' : `No - ${applicationData.under18Explain || ''}`);
    addField(doc, 'Previously Worked Here', applicationData.workedHereBefore === 'yes' ? `Yes - ${applicationData.workedHereWhen || ''}` : 'No');

    // Employment Type
    addSectionTitle(doc, 'Employment Type Desired');
    addField(doc, 'Type(s)', Array.isArray(applicationData.employmentType) ? applicationData.employmentType.join(', ') : applicationData.employmentType);
    addField(doc, "Driver's License #", applicationData.driversLicense);
    addField(doc, 'License State', applicationData.licenseState);

    // Education
    addSectionTitle(doc, 'Education');
    addField(doc, 'High School', applicationData.highSchoolName);
    addField(doc, 'HS Graduated', applicationData.highSchoolGraduate === 'yes' ? 'Yes' : 'No');
    addField(doc, 'College', applicationData.collegeName);
    addField(doc, 'College Years', applicationData.collegeYears);
    addField(doc, 'College Degrees', applicationData.collegeDegreesCompleted);
    addField(doc, 'College Subjects', applicationData.collegeOtherSubjects);
    addField(doc, 'Trade School', applicationData.tradeSchoolName);
    addField(doc, 'Trade School Years', applicationData.tradeSchoolYears);
    addField(doc, 'Trade School Subjects', applicationData.tradeSchoolSubjects);
    addField(doc, 'Trade School Graduated', applicationData.tradeSchoolGraduate);

    // Special Skills
    if (applicationData.specialSkills) {
      addSectionTitle(doc, 'Special Skills & Qualifications');
      doc.font('Helvetica').fontSize(10).text(applicationData.specialSkills, { width: doc.page.width - 80 });
    }

    // Employment History helper
    const addEmployment = (num, label) => {
      const company = applicationData[`employment${num}CompanyName`];
      if (!company) return;
      addSectionTitle(doc, label);
      addField(doc, 'Company', company);
      addField(doc, 'Address', `${applicationData[`employment${num}Address`] || ''}, ${applicationData[`employment${num}City`] || ''}, ${applicationData[`employment${num}State`] || ''} ${applicationData[`employment${num}Zip`] || ''}`);
      addField(doc, 'Phone', applicationData[`employment${num}Phone`]);
      addField(doc, 'Position', applicationData[`employment${num}Position`]);
      addField(doc, 'Duration', `${applicationData[`employment${num}From`] || 'N/A'} to ${applicationData[`employment${num}To`] || 'Present'}`);
      addField(doc, 'Starting Salary', applicationData[`employment${num}StartingSalary`]);
      addField(doc, 'Ending Salary', applicationData[`employment${num}EndingSalary`]);
      addField(doc, 'Responsibilities', applicationData[`employment${num}Responsibilities`]);
      addField(doc, 'Supervisor', applicationData[`employment${num}Supervisor`]);
      addField(doc, 'Supervisor Title', applicationData[`employment${num}Title`]);
      addField(doc, 'Reason for Leaving', applicationData[`employment${num}ReasonLeaving`]);
      addField(doc, 'May Contact', applicationData[`employment${num}MayContact`] === 'yes' ? 'Yes' : 'No');
    };

    addEmployment(1, 'Most Recent Employment');
    addEmployment(2, 'Previous Employment #2');
    addEmployment(3, 'Previous Employment #3');

    // Signature
    addSectionTitle(doc, 'Certification & Signature');
    addField(doc, 'Application Date', applicationData.dateOfInterview);
    addField(doc, 'Signature', applicationData.applicantSignature);
    addField(doc, 'Signature Date', applicationData.signatureDate);

    addFooter(doc);
    doc.end();

    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
};

// ─── EMAIL SENDERS ───────────────────────────────────────────────────────────

const sendDriverApplication = async (applicationData, resumeFile) => {
  const transport = createTransport();
  const pdfPath = await generateDriverPDF(applicationData);

  const attachments = [{ filename: `Driver-Application-${applicationData.firstName}-${applicationData.lastName}.pdf`, path: pdfPath }];
  if (resumeFile) attachments.push({ filename: resumeFile.originalname, path: resumeFile.path });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.APPLICATIONS_EMAIL || process.env.GMAIL_USER,
    replyTo: applicationData.email,
    subject: `New Driver Application - ${applicationData.firstName} ${applicationData.lastName}`,
    html: `<p>A new CDL-A Driver application has been submitted by <strong>${applicationData.firstName} ${applicationData.lastName}</strong>.</p><p>Please see the attached PDF for full details.</p>`,
    attachments
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log('Driver application email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending driver application email:', error);
    throw error;
  } finally {
    // Clean up generated PDF
    fs.unlink(pdfPath, (err) => { if (err) console.error('Error deleting PDF:', err); });
  }
};

const sendGeneralApplication = async (applicationData, resumeFile) => {
  const transport = createTransport();
  const pdfPath = await generateGeneralPDF(applicationData);

  const attachments = [{ filename: `${applicationData.positionApplied}-Application-${applicationData.fullName}.pdf`, path: pdfPath }];
  if (resumeFile) attachments.push({ filename: resumeFile.originalname, path: resumeFile.path });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.APPLICATIONS_EMAIL || process.env.GMAIL_USER,
    replyTo: applicationData.email,
    subject: `New ${applicationData.positionApplied} Application - ${applicationData.fullName}`,
    html: `<p>A new ${applicationData.positionApplied} application has been submitted by <strong>${applicationData.fullName}</strong>.</p><p>Please see the attached PDF for full details.</p>`,
    attachments
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log('General application email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending general application email:', error);
    throw error;
  } finally {
    // Clean up generated PDF
    fs.unlink(pdfPath, (err) => { if (err) console.error('Error deleting PDF:', err); });
  }
};

module.exports = { sendDriverApplication, sendGeneralApplication };