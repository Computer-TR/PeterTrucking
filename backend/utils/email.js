const nodemailer = require('nodemailer');

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

/**
 * Send Driver Application Email
 */
const sendDriverApplication = async (applicationData, resumeFile) => {
  const transport = createTransport();

  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background-color: #dc2626; color: white; padding: 20px; text-center; }
        .section { margin: 20px 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #dc2626; }
        .section-title { font-size: 18px; font-weight: bold; color: #dc2626; margin-bottom: 10px; }
        .field { margin: 10px 0; }
        .field-label { font-weight: bold; color: #555; }
        .field-value { margin-left: 10px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New CDL-A Driver Application</h1>
          <p>Peter Trucking LLC</p>
        </div>

        <div class="section">
          <div class="section-title">Applicant Information</div>
          <div class="field">
            <span class="field-label">Name:</span>
            <span class="field-value">${applicationData.firstName} ${applicationData.middleName || ''} ${applicationData.lastName}</span>
          </div>
          <div class="field">
            <span class="field-label">Email:</span>
            <span class="field-value">${applicationData.email}</span>
          </div>
          <div class="field">
            <span class="field-label">Phone:</span>
            <span class="field-value">${applicationData.phone}</span>
          </div>
          <div class="field">
            <span class="field-label">Date of Birth:</span>
            <span class="field-value">${applicationData.dateOfBirth}</span>
          </div>
          <div class="field">
            <span class="field-label">Position:</span>
            <span class="field-value">${applicationData.position}</span>
          </div>
          <div class="field">
            <span class="field-label">Date Available:</span>
            <span class="field-value">${applicationData.dateAvailable || 'Not specified'}</span>
          </div>
          <div class="field">
            <span class="field-label">Legal to Work in US:</span>
            <span class="field-value">${applicationData.legalToWork === 'yes' ? 'Yes' : 'No'}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Current Address</div>
          <div class="field">
            <span class="field-value">
              ${applicationData.currentStreet || ''}<br/>
              ${applicationData.currentCity || ''}, ${applicationData.currentState || ''} ${applicationData.currentZip || ''}<br/>
              Years at address: ${applicationData.currentYears || 'N/A'}
            </span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">License Information</div>
          <div class="field">
            <span class="field-label">State:</span>
            <span class="field-value">${applicationData.licenseState || 'N/A'}</span>
          </div>
          <div class="field">
            <span class="field-label">License #:</span>
            <span class="field-value">${applicationData.licenseNumber || 'N/A'}</span>
          </div>
          <div class="field">
            <span class="field-label">Type/Class:</span>
            <span class="field-value">${applicationData.licenseType || 'N/A'}</span>
          </div>
          <div class="field">
            <span class="field-label">Endorsements:</span>
            <span class="field-value">${applicationData.licenseEndorsements || 'None'}</span>
          </div>
          <div class="field">
            <span class="field-label">Expiration:</span>
            <span class="field-value">${applicationData.licenseExpiration || 'N/A'}</span>
          </div>
        </div>

        ${applicationData.tractorSemiExp || applicationData.tankerExp ? `
        <div class="section">
          <div class="section-title">Driving Experience</div>
          ${applicationData.tractorSemiExp ? `
          <div class="field">
            <span class="field-label">Tractor & Semi-Trailer:</span>
            <span class="field-value">
              ${applicationData.tractorSemiExp} | 
              ${applicationData.tractorSemiDates || 'N/A'} | 
              ${applicationData.tractorSemiMiles || 'N/A'} miles
            </span>
          </div>
          ` : ''}
          ${applicationData.tankerExp ? `
          <div class="field">
            <span class="field-label">Tanker:</span>
            <span class="field-value">
              ${applicationData.tankerExp} | 
              ${applicationData.tankerDates || 'N/A'} | 
              ${applicationData.tankerMiles || 'N/A'} miles
            </span>
          </div>
          ` : ''}
        </div>
        ` : ''}

        ${applicationData.accidents || applicationData.violations ? `
        <div class="section">
          <div class="section-title">Accident & Violation Record</div>
          ${applicationData.accidents ? `
          <div class="field">
            <span class="field-label">Accidents:</span>
            <span class="field-value">${applicationData.accidents}</span>
          </div>
          ` : ''}
          ${applicationData.violations ? `
          <div class="field">
            <span class="field-label">Violations:</span>
            <span class="field-value">${applicationData.violations}</span>
          </div>
          ` : ''}
        </div>
        ` : ''}

        ${applicationData.currentEmployerName ? `
        <div class="section">
          <div class="section-title">Current Employer</div>
          <div class="field">
            <span class="field-label">Company:</span>
            <span class="field-value">${applicationData.currentEmployerName}</span>
          </div>
          <div class="field">
            <span class="field-label">Phone:</span>
            <span class="field-value">${applicationData.currentEmployerPhone || 'N/A'}</span>
          </div>
          <div class="field">
            <span class="field-label">Position:</span>
            <span class="field-value">${applicationData.currentPosition || 'N/A'}</span>
          </div>
          <div class="field">
            <span class="field-label">Duration:</span>
            <span class="field-value">${applicationData.currentFromDate || 'N/A'} to ${applicationData.currentToDate || 'Present'}</span>
          </div>
        </div>
        ` : ''}

        ${applicationData.otherQualifications ? `
        <div class="section">
          <div class="section-title">Other Qualifications</div>
          <div class="field">
            <span class="field-value">${applicationData.otherQualifications}</span>
          </div>
        </div>
        ` : ''}

        <div class="section">
          <div class="section-title">Application Details</div>
          <div class="field">
            <span class="field-label">Application Date:</span>
            <span class="field-value">${applicationData.dateOfApplication}</span>
          </div>
          <div class="field">
            <span class="field-label">Signature:</span>
            <span class="field-value">${applicationData.applicantSignature}</span>
          </div>
          <div class="field">
            <span class="field-label">Signature Date:</span>
            <span class="field-value">${applicationData.signatureDate}</span>
          </div>
        </div>

        <div class="footer">
          <p>Peter Trucking LLC | 118576 County Road A, Athens, WI 54411</p>
          <p>This application was submitted via the company website</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.APPLICATIONS_EMAIL || process.env.GMAIL_USER,
  subject: `New Driver Application - ${applicationData.firstName} ${applicationData.lastName}`,
  html: emailHTML,
  replyTo: applicationData.email,
  attachments: resumeFile ? [{
    filename: resumeFile.originalname,
    path: resumeFile.path
  }] : []
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

/**
 * Send General Application Email (Fleet Maintenance / Office)
 */
const sendGeneralApplication = async (applicationData, resumeFile) => {
  const transport = createTransport();

  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background-color: #dc2626; color: white; padding: 20px; text-center; }
        .section { margin: 20px 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #dc2626; }
        .section-title { font-size: 18px; font-weight: bold; color: #dc2626; margin-bottom: 10px; }
        .field { margin: 10px 0; }
        .field-label { font-weight: bold; color: #555; }
        .field-value { margin-left: 10px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New ${applicationData.positionApplied} Application</h1>
          <p>Peter Trucking LLC</p>
        </div>

        <div class="section">
          <div class="section-title">Applicant Information</div>
          <div class="field">
            <span class="field-label">Name:</span>
            <span class="field-value">${applicationData.fullName}</span>
          </div>
          <div class="field">
            <span class="field-label">Email:</span>
            <span class="field-value">${applicationData.email}</span>
          </div>
          <div class="field">
            <span class="field-label">Phone:</span>
            <span class="field-value">${applicationData.phone}</span>
          </div>
          ${applicationData.mobile ? `
          <div class="field">
            <span class="field-label">Mobile/Other:</span>
            <span class="field-value">${applicationData.mobile}</span>
          </div>
          ` : ''}
          <div class="field">
            <span class="field-label">Date of Birth:</span>
            <span class="field-value">${applicationData.dateOfBirth}</span>
          </div>
          <div class="field">
            <span class="field-label">Position Applied:</span>
            <span class="field-value">${applicationData.positionApplied}</span>
          </div>
          <div class="field">
            <span class="field-label">Date Available:</span>
            <span class="field-value">${applicationData.dateAvailable || 'Not specified'}</span>
          </div>
          <div class="field">
            <span class="field-label">Salary Requirements:</span>
            <span class="field-value">${applicationData.salaryRequirements || 'Not specified'}</span>
          </div>
          <div class="field">
            <span class="field-label">Referred By:</span>
            <span class="field-value">${applicationData.referredBy || 'Not specified'}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Address</div>
          <div class="field">
            <span class="field-value">
              ${applicationData.address || ''}<br/>
              ${applicationData.city || ''}, ${applicationData.state || ''} ${applicationData.zip || ''}
            </span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Employment Preferences</div>
          <div class="field">
            <span class="field-label">Employment Type:</span>
            <span class="field-value">${applicationData.employmentType.join(', ')}</span>
          </div>
          <div class="field">
            <span class="field-label">Legally Allowed to Work in US:</span>
            <span class="field-value">${applicationData.legallyAllowed === 'yes' ? 'Yes' : 'No'}</span>
          </div>
        </div>

        ${applicationData.highSchoolName || applicationData.collegeName || applicationData.tradeSchoolName ? `
        <div class="section">
          <div class="section-title">Education</div>
          ${applicationData.highSchoolName ? `
          <div class="field">
            <span class="field-label">High School:</span>
            <span class="field-value">${applicationData.highSchoolName} - Graduated: ${applicationData.highSchoolGraduate || 'N/A'}</span>
          </div>
          ` : ''}
          ${applicationData.collegeName ? `
          <div class="field">
            <span class="field-label">College:</span>
            <span class="field-value">${applicationData.collegeName} - Years: ${applicationData.collegeYears || 'N/A'}</span>
          </div>
          ` : ''}
          ${applicationData.tradeSchoolName ? `
          <div class="field">
            <span class="field-label">Trade School:</span>
            <span class="field-value">${applicationData.tradeSchoolName} - Years: ${applicationData.tradeSchoolYears || 'N/A'}</span>
          </div>
          ` : ''}
        </div>
        ` : ''}

        ${applicationData.specialSkills ? `
        <div class="section">
          <div class="section-title">Special Skills & Qualifications</div>
          <div class="field">
            <span class="field-value">${applicationData.specialSkills}</span>
          </div>
        </div>
        ` : ''}

        ${applicationData.employment1CompanyName ? `
        <div class="section">
          <div class="section-title">Most Recent Employment</div>
          <div class="field">
            <span class="field-label">Company:</span>
            <span class="field-value">${applicationData.employment1CompanyName}</span>
          </div>
          <div class="field">
            <span class="field-label">Position:</span>
            <span class="field-value">${applicationData.employment1Position || 'N/A'}</span>
          </div>
          <div class="field">
            <span class="field-label">Duration:</span>
            <span class="field-value">${applicationData.employment1From || 'N/A'} to ${applicationData.employment1To || 'Present'}</span>
          </div>
          ${applicationData.employment1Responsibilities ? `
          <div class="field">
            <span class="field-label">Responsibilities:</span>
            <span class="field-value">${applicationData.employment1Responsibilities}</span>
          </div>
          ` : ''}
          ${applicationData.employment1Supervisor ? `
          <div class="field">
            <span class="field-label">Supervisor:</span>
            <span class="field-value">${applicationData.employment1Supervisor} - ${applicationData.employment1Title || ''}</span>
          </div>
          ` : ''}
          <div class="field">
            <span class="field-label">May Contact:</span>
            <span class="field-value">${applicationData.employment1MayContact === 'yes' ? 'Yes' : 'No'}</span>
          </div>
        </div>
        ` : ''}

        <div class="section">
          <div class="section-title">Application Details</div>
          <div class="field">
            <span class="field-label">Application Date:</span>
            <span class="field-value">${applicationData.dateOfInterview}</span>
          </div>
          <div class="field">
            <span class="field-label">Signature:</span>
            <span class="field-value">${applicationData.applicantSignature}</span>
          </div>
          <div class="field">
            <span class="field-label">Signature Date:</span>
            <span class="field-value">${applicationData.signatureDate}</span>
          </div>
        </div>

        <div class="footer">
          <p>Peter Trucking LLC | 118576 County Road A, Athens, WI 54411</p>
          <p>This application was submitted via the company website</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.APPLICATIONS_EMAIL || process.env.GMAIL_USER,
    subject: `New ${applicationData.positionApplied} Application - ${applicationData.fullName}`,
    html: emailHTML,
    replyTo: applicationData.email,
    attachments: resumeFile ? [{
      filename: resumeFile.originalname,
      path: resumeFile.path
    }] : []
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

module.exports = {
  sendDriverApplication,
  sendGeneralApplication
};

