// const nodemailer = require('nodemailer');
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const path = require('path');

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

// // ─── PDF HELPERS ────────────────────────────────────────────────────────────

// const addHeader = (doc, title) => {
//   doc.rect(0, 0, doc.page.width, 70).fill('#dc2626');
//   doc.fillColor('white').fontSize(20).font('Helvetica-Bold')
//     .text(title, 40, 20);
//   doc.fontSize(12).font('Helvetica')
//     .text('Peter Trucking LLC', 40, 45);
//   doc.fillColor('#333').moveDown();
//   doc.y = 90;
// };

// const addSectionTitle = (doc, title) => {
//   doc.moveDown(0.8);
//   const y = doc.y;
//   doc.rect(40, y, doc.page.width - 80, 22).fill('#dc2626');
//   doc.fillColor('white').fontSize(12).font('Helvetica-Bold')
//     .text(title, 45, y + 5, { width: doc.page.width - 90 });
//   doc.fillColor('#333').font('Helvetica').fontSize(10);
//   doc.y = y + 32;
// };

// const addField = (doc, label, value) => {
//   if (value === undefined || value === null || value === '') return;
//   const text = `${label}: ${String(value)}`;
//   doc.font('Helvetica').fontSize(10).text(text, 45, doc.y, { 
//     width: doc.page.width - 90,
//     lineGap: 2
//   });
//   doc.moveDown(0.3);
// };

// const addFooter = (doc) => {
//   doc.moveDown(2);
//   doc.moveTo(40, doc.y).lineTo(doc.page.width - 40, doc.y).stroke('#e5e7eb');
//   doc.moveDown(0.5);
//   doc.fillColor('#6b7280').fontSize(9).font('Helvetica')
//     .text('Peter Trucking LLC | 118576 County Road A, Athens, WI 54411', { align: 'center' })
//     .text('This application was submitted via the company website', { align: 'center' });
// };

// const generateTempPath = (filename) => {
//   return path.join(__dirname, '..', 'uploads', filename);
// };

// // ─── DRIVER APPLICATION PDF ─────────────────────────────────────────────────

// const generateDriverPDF = (applicationData) => {
//   return new Promise((resolve, reject) => {
//     const doc = new PDFDocument({ margin: 40 });
//     const filePath = generateTempPath(`driver-app-${Date.now()}.pdf`);
//     const stream = fs.createWriteStream(filePath);

//     doc.pipe(stream);

//     addHeader(doc, 'CDL-A Driver Application');

//     // Personal Information
//     addSectionTitle(doc, 'Personal Information');
//     addField(doc, 'Name', `${applicationData.firstName} ${applicationData.middleName || ''} ${applicationData.lastName}`.trim());
//     addField(doc, 'Email', applicationData.email);
//     addField(doc, 'Phone', applicationData.phone);
//     addField(doc, 'Date of Birth', applicationData.dateOfBirth);
//     addField(doc, 'SSN (Last 4)', `***-**-${applicationData.ssnLast4}`);
//     addField(doc, 'Position', applicationData.position);
//     addField(doc, 'Date Available', applicationData.dateAvailable || 'Not specified');
//     addField(doc, 'Legal to Work in US', applicationData.legalToWork === 'yes' ? 'Yes' : 'No');
//     addField(doc, 'Application Date', applicationData.dateOfApplication);

//     // Current Address
//     addSectionTitle(doc, 'Current Address');
//     addField(doc, 'Street', applicationData.currentStreet);
//     addField(doc, 'City', applicationData.currentCity);
//     addField(doc, 'State', applicationData.currentState);
//     addField(doc, 'Zip', applicationData.currentZip);
//     addField(doc, 'Years at Address', applicationData.currentYears);

//     // License Information
//     addSectionTitle(doc, 'License Information');
//     addField(doc, 'State', applicationData.licenseState);
//     addField(doc, 'License #', applicationData.licenseNumber);
//     addField(doc, 'Type/Class', applicationData.licenseType);
//     addField(doc, 'Endorsements', applicationData.licenseEndorsements || 'None');
//     addField(doc, 'Expiration', applicationData.licenseExpiration);

//     // Driving Experience
//     addSectionTitle(doc, 'Driving Experience');
//     addField(doc, 'Tractor & Semi-Trailer Experience', applicationData.tractorSemiExp);
//     addField(doc, 'Tractor & Semi-Trailer Dates', applicationData.tractorSemiDates);
//     addField(doc, 'Tractor & Semi-Trailer Miles', applicationData.tractorSemiMiles);
//     addField(doc, 'Tanker Experience', applicationData.tankerExp);
//     addField(doc, 'Tanker Dates', applicationData.tankerDates);
//     addField(doc, 'Tanker Miles', applicationData.tankerMiles);

//     // Accident & Violation Record
//     addSectionTitle(doc, 'Accident & Violation Record');
//     addField(doc, 'Accidents', applicationData.accidents || 'None reported');
//     addField(doc, 'Violations', applicationData.violations || 'None reported');

//     // Background Questions
//     addSectionTitle(doc, 'Background Questions');
//     addField(doc, 'License Ever Denied', applicationData.licenseDenied === 'yes' ? `Yes - ${applicationData.licenseDeniedExplain || ''}` : 'No');
//     addField(doc, 'License Ever Suspended', applicationData.licenseSuspended === 'yes' ? `Yes - ${applicationData.licenseSuspendedExplain || ''}` : 'No');
//     addField(doc, 'Criminal Conviction', applicationData.criminalConviction === 'yes' ? `Yes - ${applicationData.criminalConvictionExplain || ''}` : 'No');

//     // Employment History
//     if (applicationData.currentEmployerName) {
//       addSectionTitle(doc, 'Current / Most Recent Employer');
//       addField(doc, 'Company', applicationData.currentEmployerName);
//       addField(doc, 'Phone', applicationData.currentEmployerPhone);
//       addField(doc, 'Address', applicationData.currentEmployerAddress);
//       addField(doc, 'Position', applicationData.currentPosition);
//       addField(doc, 'From', applicationData.currentFromDate);
//       addField(doc, 'To', applicationData.currentToDate || 'Present');
//       addField(doc, 'Reason for Leaving', applicationData.currentLeaveReason);
//     }

//     // Education
//     addSectionTitle(doc, 'Education');
//     addField(doc, 'High School', applicationData.highSchoolName);
//     addField(doc, 'High School Graduate', applicationData.highSchoolGraduate === 'yes' ? 'Yes' : applicationData.highSchoolGraduate === 'no' ? 'No' : 'N/A');
//     addField(doc, 'College', applicationData.collegeName);
//     addField(doc, 'College Graduate', applicationData.collegeGraduate === 'yes' ? 'Yes' : applicationData.collegeGraduate === 'no' ? 'No' : 'N/A');

//     // Other Qualifications
//     if (applicationData.otherQualifications) {
//       addSectionTitle(doc, 'Other Qualifications');
//       doc.font('Helvetica').fontSize(10).text(applicationData.otherQualifications, { width: doc.page.width - 80 });
//     }

//     // Signature
//     addSectionTitle(doc, 'Signature');
//     addField(doc, 'Signature', applicationData.applicantSignature);
//     addField(doc, 'Signature Date', applicationData.signatureDate);

//     addFooter(doc);
//     doc.end();

//     stream.on('finish', () => resolve(filePath));
//     stream.on('error', reject);
//   });
// };

// // ─── GENERAL APPLICATION PDF ────────────────────────────────────────────────

// const generateGeneralPDF = (applicationData) => {
//   return new Promise((resolve, reject) => {
//     const doc = new PDFDocument({ margin: 40 });
//     const filePath = generateTempPath(`general-app-${Date.now()}.pdf`);
//     const stream = fs.createWriteStream(filePath);

//     doc.pipe(stream);

//     addHeader(doc, `${applicationData.positionApplied} Application`);

//     // Applicant Information
//     addSectionTitle(doc, 'Applicant Information');
//     addField(doc, 'Full Name', applicationData.fullName);
//     addField(doc, 'Date of Birth', applicationData.dateOfBirth);
//     addField(doc, 'SSN (Last 4)', `***-**-${applicationData.ssnLast4}`);
//     addField(doc, 'Email', applicationData.email);
//     addField(doc, 'Phone', applicationData.phone);
//     addField(doc, 'Mobile/Other', applicationData.mobile);
//     addField(doc, 'Position Applied', applicationData.positionApplied);
//     addField(doc, 'Date Available', applicationData.dateAvailable || 'Not specified');
//     addField(doc, 'Salary Requirements', applicationData.salaryRequirements || 'Not specified');
//     addField(doc, 'Referred By', applicationData.referredBy || 'Not specified');

//     // Address
//     addSectionTitle(doc, 'Address');
//     addField(doc, 'Street', applicationData.address);
//     addField(doc, 'City', applicationData.city);
//     addField(doc, 'State', applicationData.state);
//     addField(doc, 'Zip', applicationData.zip);

//     // Work Authorization
//     addSectionTitle(doc, 'Work Authorization');
//     addField(doc, 'Legally Allowed to Work in US', applicationData.legallyAllowed === 'yes' ? 'Yes' : 'No');
//     addField(doc, 'Under 18 Work Permit', applicationData.under18WorkPermit === 'n/a' ? 'N/A (18 or older)' : applicationData.under18WorkPermit === 'yes' ? 'Yes' : `No - ${applicationData.under18Explain || ''}`);
//     addField(doc, 'Previously Worked Here', applicationData.workedHereBefore === 'yes' ? `Yes - ${applicationData.workedHereWhen || ''}` : 'No');

//     // Employment Type
//     addSectionTitle(doc, 'Employment Type Desired');
//     addField(doc, 'Type(s)', Array.isArray(applicationData.employmentType) ? applicationData.employmentType.join(', ') : applicationData.employmentType);
//     addField(doc, "Driver's License #", applicationData.driversLicense);
//     addField(doc, 'License State', applicationData.licenseState);

//     // Education
//     addSectionTitle(doc, 'Education');
//     addField(doc, 'High School', applicationData.highSchoolName);
//     addField(doc, 'HS Graduated', applicationData.highSchoolGraduate === 'yes' ? 'Yes' : 'No');
//     addField(doc, 'College', applicationData.collegeName);
//     addField(doc, 'College Years', applicationData.collegeYears);
//     addField(doc, 'College Degrees', applicationData.collegeDegreesCompleted);
//     addField(doc, 'College Subjects', applicationData.collegeOtherSubjects);
//     addField(doc, 'Trade School', applicationData.tradeSchoolName);
//     addField(doc, 'Trade School Years', applicationData.tradeSchoolYears);
//     addField(doc, 'Trade School Subjects', applicationData.tradeSchoolSubjects);
//     addField(doc, 'Trade School Graduated', applicationData.tradeSchoolGraduate);

//     // Special Skills
//     if (applicationData.specialSkills) {
//       addSectionTitle(doc, 'Special Skills & Qualifications');
//       doc.font('Helvetica').fontSize(10).text(applicationData.specialSkills, { width: doc.page.width - 80 });
//     }

//     // Employment History helper
//     const addEmployment = (num, label) => {
//       const company = applicationData[`employment${num}CompanyName`];
//       if (!company) return;
//       addSectionTitle(doc, label);
//       addField(doc, 'Company', company);
//       addField(doc, 'Address', `${applicationData[`employment${num}Address`] || ''}, ${applicationData[`employment${num}City`] || ''}, ${applicationData[`employment${num}State`] || ''} ${applicationData[`employment${num}Zip`] || ''}`);
//       addField(doc, 'Phone', applicationData[`employment${num}Phone`]);
//       addField(doc, 'Position', applicationData[`employment${num}Position`]);
//       addField(doc, 'Duration', `${applicationData[`employment${num}From`] || 'N/A'} to ${applicationData[`employment${num}To`] || 'Present'}`);
//       addField(doc, 'Starting Salary', applicationData[`employment${num}StartingSalary`]);
//       addField(doc, 'Ending Salary', applicationData[`employment${num}EndingSalary`]);
//       addField(doc, 'Responsibilities', applicationData[`employment${num}Responsibilities`]);
//       addField(doc, 'Supervisor', applicationData[`employment${num}Supervisor`]);
//       addField(doc, 'Supervisor Title', applicationData[`employment${num}Title`]);
//       addField(doc, 'Reason for Leaving', applicationData[`employment${num}ReasonLeaving`]);
//       addField(doc, 'May Contact', applicationData[`employment${num}MayContact`] === 'yes' ? 'Yes' : 'No');
//     };

//     addEmployment(1, 'Most Recent Employment');
//     addEmployment(2, 'Previous Employment #2');
//     addEmployment(3, 'Previous Employment #3');

//     // Signature
//     addSectionTitle(doc, 'Certification & Signature');
//     addField(doc, 'Application Date', applicationData.dateOfInterview);
//     addField(doc, 'Signature', applicationData.applicantSignature);
//     addField(doc, 'Signature Date', applicationData.signatureDate);

//     addFooter(doc);
//     doc.end();

//     stream.on('finish', () => resolve(filePath));
//     stream.on('error', reject);
//   });
// };

// // ─── EMAIL SENDERS ───────────────────────────────────────────────────────────

// const sendDriverApplication = async (applicationData, resumeFile) => {
//   const transport = createTransport();
//   const pdfPath = await generateDriverPDF(applicationData);

//   const attachments = [{ filename: `Driver-Application-${applicationData.firstName}-${applicationData.lastName}.pdf`, path: pdfPath }];
//   if (resumeFile) attachments.push({ filename: resumeFile.originalname, path: resumeFile.path });

//   const mailOptions = {
//     from: process.env.GMAIL_USER,
//     to: process.env.APPLICATIONS_EMAIL || process.env.GMAIL_USER,
//     replyTo: applicationData.email,
//     subject: `New Driver Application - ${applicationData.firstName} ${applicationData.lastName}`,
//     html: `<p>A new CDL-A Driver application has been submitted by <strong>${applicationData.firstName} ${applicationData.lastName}</strong>.</p><p>Please see the attached PDF for full details.</p>`,
//     attachments
//   };

//   try {
//     const info = await transport.sendMail(mailOptions);
//     console.log('Driver application email sent:', info.messageId);
//     return { success: true, messageId: info.messageId };
//   } catch (error) {
//     console.error('Error sending driver application email:', error);
//     throw error;
//   } finally {
//     // Clean up generated PDF
//     fs.unlink(pdfPath, (err) => { if (err) console.error('Error deleting PDF:', err); });
//   }
// };

// const sendGeneralApplication = async (applicationData, resumeFile) => {
//   const transport = createTransport();
//   const pdfPath = await generateGeneralPDF(applicationData);

//   const attachments = [{ filename: `${applicationData.positionApplied}-Application-${applicationData.fullName}.pdf`, path: pdfPath }];
//   if (resumeFile) attachments.push({ filename: resumeFile.originalname, path: resumeFile.path });

//   const mailOptions = {
//     from: process.env.GMAIL_USER,
//     to: process.env.APPLICATIONS_EMAIL || process.env.GMAIL_USER,
//     replyTo: applicationData.email,
//     subject: `New ${applicationData.positionApplied} Application - ${applicationData.fullName}`,
//     html: `<p>A new ${applicationData.positionApplied} application has been submitted by <strong>${applicationData.fullName}</strong>.</p><p>Please see the attached PDF for full details.</p>`,
//     attachments
//   };

//   try {
//     const info = await transport.sendMail(mailOptions);
//     console.log('General application email sent:', info.messageId);
//     return { success: true, messageId: info.messageId };
//   } catch (error) {
//     console.error('Error sending general application email:', error);
//     throw error;
//   } finally {
//     // Clean up generated PDF
//     fs.unlink(pdfPath, (err) => { if (err) console.error('Error deleting PDF:', err); });
//   }
// };

// module.exports = { sendDriverApplication, sendGeneralApplication };

const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');

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

// ─── BUFFER HELPER ───────────────────────────────────────────────────────────

const generatePDFBuffer = (buildFn) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 40 });
    const chunks = [];

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    buildFn(doc);
    doc.end();
  });
};

// ─── DRIVER APPLICATION PDF ─────────────────────────────────────────────────

const generateDriverPDF = (applicationData) => {
  return generatePDFBuffer((doc) => {
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
  });
};

// ─── GENERAL APPLICATION PDF ────────────────────────────────────────────────

const generateGeneralPDF = (applicationData) => {
  return generatePDFBuffer((doc) => {
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
  });
};

// ─── EMAIL SENDERS ───────────────────────────────────────────────────────────

const sendDriverApplication = async (applicationData, resumeFile) => {
  const transport = createTransport();
  const pdfBuffer = await generateDriverPDF(applicationData);

  const attachments = [{
    filename: `Driver-Application-${applicationData.firstName}-${applicationData.lastName}.pdf`,
    content: pdfBuffer,
    contentType: 'application/pdf'
  }];

  if (resumeFile) {
    attachments.push({
      filename: resumeFile.originalname,
      content: resumeFile.buffer,
      contentType: resumeFile.mimetype
    });
  }

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
  }
};

const sendGeneralApplication = async (applicationData, resumeFile) => {
  const transport = createTransport();
  const pdfBuffer = await generateGeneralPDF(applicationData);

  const attachments = [{
    filename: `${applicationData.positionApplied}-Application-${applicationData.fullName}.pdf`,
    content: pdfBuffer,
    contentType: 'application/pdf'
  }];

  if (resumeFile) {
    attachments.push({
      filename: resumeFile.originalname,
      content: resumeFile.buffer,
      contentType: resumeFile.mimetype
    });
  }

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
  }
};

module.exports = { sendDriverApplication, sendGeneralApplication };
