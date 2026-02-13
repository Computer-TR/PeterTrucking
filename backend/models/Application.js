const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  
  // Position Information
  positionApplied: {
    type: String,
    required: [true, 'Position is required'],
    enum: ['Company Driver', 'Owner Operator', 'Local Driver', 'Regional Driver', 'Long Haul Driver', 'Dispatcher', 'Mechanic', 'Other']
  },
  
  // CDL Information (for drivers)
  hasCDL: {
    type: Boolean,
    default: false
  },
  cdlNumber: String,
  cdlState: String,
  cdlClass: {
    type: String,
    enum: ['Class A', 'Class B', 'Class C', 'None']
  },
  endorsements: [String], // H, N, T, P, S, X
  
  // Experience
  yearsExperience: {
    type: Number,
    required: [true, 'Years of experience is required']
  },
  previousEmployer: String,
  equipmentExperience: [{
    type: String,
    enum: ['Dry Van', 'Refrigerated', 'Hopper', 'Flatbed', 'Tanker', 'Other']
  }],
  
  // Additional Information
  canStartDate: Date,
  preferredRoute: {
    type: String,
    enum: ['Local', 'Regional', 'Long Haul', 'Flexible']
  },
  willingToRelocate: {
    type: Boolean,
    default: false
  },
  
  // Documents
  resume: String, // File path
  cdlCopy: String, // File path
  medicalCard: String, // File path
  
  // Additional Notes
  additionalInfo: String,
  
  // Application Status
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'interviewed', 'accepted', 'rejected'],
    default: 'pending'
  },
  notes: String, // Admin notes
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  reviewedAt: Date,
  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for searching
applicationSchema.index({ firstName: 1, lastName: 1, email: 1 });
applicationSchema.index({ status: 1 });
applicationSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Application', applicationSchema);