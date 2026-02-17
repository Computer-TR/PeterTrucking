// const express = require('express');
// const router = express.Router();
// const applicationController = require('../controllers/applicationController');

// // POST /api/applications/submit-driver
// router.post('/submit-driver', applicationController.submitDriverApplication);

// // POST /api/applications/submit-general
// router.post('/submit-general', applicationController.submitGeneralApplication);

// module.exports = router;

const express = require('express');
const router = express.Router();
const multer = require('multer');
const applicationController = require('../controllers/applicationController');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Make sure this folder exists!
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX are allowed.'));
    }
  }
});


router.post('/submit-driver', upload.single('resume'), applicationController.submitDriverApplication);
// router.post('/submit-driver', applicationController.submitDriverApplication);


router.post('/submit-general', upload.single('resume'), applicationController.submitGeneralApplication);
// router.post('/submit-general', applicationController.submitGeneralApplication);


module.exports = router;
