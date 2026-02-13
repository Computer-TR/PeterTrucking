// const { sendDriverApplication, sendGeneralApplication } = require('../utils/email');

// /**
//  * Submit Driver Application
//  */
// exports.submitDriverApplication = async (req, res) => {
//   try {
//     const applicationData = req.body;

//     // Validate required fields
//     if (!applicationData.firstName || !applicationData.lastName || 
//         !applicationData.email || !applicationData.phone || 
//         !applicationData.dateOfBirth || !applicationData.ssn) {
//       return res.status(400).json({
//         success: false,
//         message: 'Missing required fields'
//       });
//     }

//     // Send email
//     await sendDriverApplication(applicationData);

//     // You can also save to database here if needed
//     // await Application.create(applicationData);

//     res.status(200).json({
//       success: true,
//       message: 'Application submitted successfully'
//     });

//   } catch (error) {
//     console.error('Error submitting driver application:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error submitting application. Please try again.'
//     });
//   }
// };

// /**
//  * Submit General Application (Fleet Maintenance / Office)
//  */
// exports.submitGeneralApplication = async (req, res) => {
//   try {
//     const applicationData = req.body;

//     // Validate required fields
//     if (!applicationData.fullName || !applicationData.email || 
//         !applicationData.phone || !applicationData.dateOfBirth || 
//         !applicationData.ssn) {
//       return res.status(400).json({
//         success: false,
//         message: 'Missing required fields'
//       });
//     }

//     if (!applicationData.legallyAllowed || applicationData.legallyAllowed !== 'yes') {
//       return res.status(400).json({
//         success: false,
//         message: 'Must be legally allowed to work in the United States'
//       });
//     }

//     if (!applicationData.employmentType || applicationData.employmentType.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please select at least one employment type'
//       });
//     }

//     // Send email
//     await sendGeneralApplication(applicationData);

//     // You can also save to database here if needed
//     // await Application.create(applicationData);

//     res.status(200).json({
//       success: true,
//       message: 'Application submitted successfully'
//     });

//   } catch (error) {
//     console.error('Error submitting general application:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error submitting application. Please try again.'
//     });
//   }
// };

const { sendDriverApplication, sendGeneralApplication } = require('../utils/email');

/**
 * Submit Driver Application
 */
exports.submitDriverApplication = async (req, res) => {
  try {
    const applicationData = req.body;
    const resumeFile = req.file; // From multer middleware

    // Validate required fields (changed ssn to ssnLast4)
    if (!applicationData.firstName || !applicationData.lastName || 
        !applicationData.email || !applicationData.phone || 
        !applicationData.dateOfBirth || !applicationData.ssnLast4) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Validate SSN last 4 (must be exactly 4 digits)
    if (!/^\d{4}$/.test(applicationData.ssnLast4)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid SSN format. Please provide last 4 digits only.'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicationData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Sanitize inputs (prevent XSS)
    const sanitize = (str) => {
      if (typeof str !== 'string') return str;
      return str.replace(/[<>]/g, '');
    };

    // Sanitize all string fields
    Object.keys(applicationData).forEach(key => {
      if (typeof applicationData[key] === 'string') {
        applicationData[key] = sanitize(applicationData[key]);
      }
    });

    // Send email with resume attachment
    await sendDriverApplication(applicationData, resumeFile);

    // Clean up uploaded file after sending email
    if (resumeFile) {
      const fs = require('fs');
      fs.unlink(resumeFile.path, (err) => {
        if (err) console.error('Error deleting temp file:', err);
      });
    }

    res.status(200).json({
      success: true,
      message: 'Application submitted successfully'
    });

  } catch (error) {
    console.error('Error submitting driver application:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting application. Please try again.'
    });
  }
};

/**
 * Submit General Application (Fleet Maintenance / Office)
 */
exports.submitGeneralApplication = async (req, res) => {
  try {
    const applicationData = req.body;
    const resumeFile = req.file; // From multer middleware

    // Parse employmentType if it's a JSON string (from FormData)
    if (typeof applicationData.employmentType === 'string') {
      try {
        applicationData.employmentType = JSON.parse(applicationData.employmentType);
      } catch (e) {
        applicationData.employmentType = [];
      }
    }

    // Validate required fields (changed ssn to ssnLast4)
    if (!applicationData.fullName || !applicationData.email || 
        !applicationData.phone || !applicationData.dateOfBirth || 
        !applicationData.ssnLast4) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Validate SSN last 4 (must be exactly 4 digits)
    if (!/^\d{4}$/.test(applicationData.ssnLast4)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid SSN format. Please provide last 4 digits only.'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicationData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Validate work authorization
    if (!applicationData.legallyAllowed || applicationData.legallyAllowed !== 'yes') {
      return res.status(400).json({
        success: false,
        message: 'Must be legally allowed to work in the United States'
      });
    }

    // Validate employment type
    if (!applicationData.employmentType || applicationData.employmentType.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please select at least one employment type'
      });
    }

    // Sanitize inputs (prevent XSS)
    const sanitize = (str) => {
      if (typeof str !== 'string') return str;
      return str.replace(/[<>]/g, '');
    };

    // Sanitize all string fields
    Object.keys(applicationData).forEach(key => {
      if (typeof applicationData[key] === 'string') {
        applicationData[key] = sanitize(applicationData[key]);
      }
    });

    // Send email with resume attachment
    await sendGeneralApplication(applicationData, resumeFile);

    // Clean up uploaded file after sending email
    if (resumeFile) {
      const fs = require('fs');
      fs.unlink(resumeFile.path, (err) => {
        if (err) console.error('Error deleting temp file:', err);
      });
    }

    res.status(200).json({
      success: true,
      message: 'Application submitted successfully'
    });

  } catch (error) {
    console.error('Error submitting general application:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting application. Please try again.'
    });
  }
};