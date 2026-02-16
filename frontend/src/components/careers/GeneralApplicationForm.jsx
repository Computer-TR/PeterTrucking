import React, { useState } from "react";
// import axios from "axios";
import { applicationService } from "../../services/applicationService";

const GeneralApplicationForm = ({ position, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [formData, setFormData] = useState({
    // Applicant Data
    dateOfInterview: new Date().toISOString().split('T')[0],
    positionApplied: position,
    referredBy: "",
    fullName: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    mobile: "",
    email: "",
    dateAvailable: "",
    ssnLast4: "",
    salaryRequirements: "",
    
    // Work Authorization
    under18WorkPermit: "",
    under18Explain: "",
    workedHereBefore: "",
    workedHereWhen: "",
    legallyAllowed: "",
    
    // Employment Type
    employmentType: [],
    driversLicense: "",
    licenseState: "",
    
    // Education
    highSchoolName: "",
    highSchoolGraduate: "",
    collegeName: "",
    collegeYears: "",
    collegeDegreesCompleted: "",
    collegeOtherSubjects: "",
    tradeSchoolName: "",
    tradeSchoolYears: "",
    tradeSchoolSubjects: "",
    tradeSchoolGraduate: "",
    
    // Special Skills
    specialSkills: "",
    
    // Employment 1
    employment1From: "",
    employment1To: "",
    employment1Position: "",
    employment1CompanyName: "",
    employment1Address: "",
    employment1City: "",
    employment1State: "",
    employment1Zip: "",
    employment1Phone: "",
    employment1Supervisor: "",
    employment1Title: "",
    employment1Responsibilities: "",
    employment1StartingSalary: "",
    employment1EndingSalary: "",
    employment1ReasonLeaving: "",
    employment1MayContact: "",
    
    // Employment 2
    employment2From: "",
    employment2To: "",
    employment2Position: "",
    employment2CompanyName: "",
    employment2Address: "",
    employment2City: "",
    employment2State: "",
    employment2Zip: "",
    employment2Phone: "",
    employment2Supervisor: "",
    employment2Title: "",
    employment2Responsibilities: "",
    employment2StartingSalary: "",
    employment2EndingSalary: "",
    employment2ReasonLeaving: "",
    employment2MayContact: "",
    
    // Employment 3
    employment3From: "",
    employment3To: "",
    employment3Position: "",
    employment3CompanyName: "",
    employment3Address: "",
    employment3City: "",
    employment3State: "",
    employment3Zip: "",
    employment3Phone: "",
    employment3Supervisor: "",
    employment3Title: "",
    employment3Responsibilities: "",
    employment3StartingSalary: "",
    employment3EndingSalary: "",
    employment3ReasonLeaving: "",
    employment3MayContact: "",
    
    // Signature
    applicantSignature: "",
    signatureDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      if (name === "employmentType") {
        setFormData(prev => ({
          ...prev,
          employmentType: checked 
            ? [...prev.employmentType, value]
            : prev.employmentType.filter(t => t !== value)
        }));
      }
    } else {
      // Apply formatting
      if (name === 'phone' || name === 'mobile' || name === 'employment1Phone') {
        value = formatPhoneNumber(value);
      } else if (name === 'zip' || name === 'employment1Zip') {
        value = formatZip(value);
      } else if (name === 'ssnLast4') {
        value = formatSSNLast4(value);
      }
      
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF, DOC, or DOCX file');
        e.target.value = '';
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        return;
      }

      setResumeFile(file);
    }
  };

    const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      let formatted = '';
      if (match[1]) formatted = `(${match[1]}`;
      if (match[2]) formatted += `) ${match[2]}`;
      if (match[3]) formatted += `-${match[3]}`;
      return formatted;
    }
    return value;
  };

  const formatZip = (value) => {
    return value.replace(/\D/g, '').slice(0, 5);
  };

  const formatSSNLast4 = (value) => {
    return value.replace(/\D/g, '').slice(0, 4);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.fullName || !formData.email || !formData.phone || 
      !formData.dateOfBirth || !formData.ssnLast4) {
    alert("Please fill in all required personal information fields");
    return;
  }

  if (!formData.legallyAllowed) {
    alert("Please confirm you are legally allowed to work in the United States");
    return;
  }

  if (formData.employmentType.length === 0) {
    alert("Please select at least one employment type");
    return;
  }

  setLoading(true);

  try {
    // Create FormData for file upload
    const submitData = new FormData();

    // Add all form fields
    Object.keys(formData).forEach(key => {
      if (Array.isArray(formData[key])) {
        submitData.append(key, JSON.stringify(formData[key]));
      } else {
        submitData.append(key, formData[key]);
      }
    });

    // Add resume file if present
    if (resumeFile) {
      submitData.append('resume', resumeFile);
    }

    // ✅ USE THE SERVICE INSTEAD
    const response = await applicationService.submitApplication(submitData);
    
    if (response.success) {
      onSuccess();
    } else {
      alert("There was an error submitting your application. Please try again.");
    }
  } catch (error) {
    console.error("Application submission error:", error);
    alert("There was an error submitting your application. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* APPLICANT DATA */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          APPLICANT DATA
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How were you referred to us?
            </label>
            <input
              type="text"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleChange}
              className="input-field"
              placeholder="e.g., Job board, referral, website"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last 4 Digits of SSN <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="ssnLast4"
              value={formData.ssnLast4}
              onChange={handleChange}
              required
              placeholder="XXXX"
              maxLength="4"
              pattern="\d{4}"
              className="input-field"
            />
            <p className="text-xs text-gray-500 mt-1">For security, we only collect the last 4 digits</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zip
            </label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile/Pager/Other
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Available to Start
            </label>
            <input
              type="date"
              name="dateAvailable"
              value={formData.dateAvailable}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary Requirements
            </label>
            <input
              type="text"
              name="salaryRequirements"
              value={formData.salaryRequirements}
              onChange={handleChange}
              placeholder="e.g., $50,000/year"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* WORK AUTHORIZATION */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          WORK AUTHORIZATION
        </h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              If you are under 18 years of age, can you provide a work permit?
            </label>
            <div className="flex gap-6 mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="under18WorkPermit"
                  value="yes"
                  checked={formData.under18WorkPermit === "yes"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="under18WorkPermit"
                  value="no"
                  checked={formData.under18WorkPermit === "no"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">No</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="under18WorkPermit"
                  value="n/a"
                  checked={formData.under18WorkPermit === "n/a"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">N/A (18 or older)</span>
              </label>
            </div>
            {formData.under18WorkPermit === "no" && (
              <input
                type="text"
                name="under18Explain"
                value={formData.under18Explain}
                onChange={handleChange}
                placeholder="If no, please explain"
                className="input-field mt-2"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Have you ever worked for this company?
            </label>
            <div className="flex gap-6 mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="workedHereBefore"
                  value="yes"
                  checked={formData.workedHereBefore === "yes"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="workedHereBefore"
                  value="no"
                  checked={formData.workedHereBefore === "no"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
            {formData.workedHereBefore === "yes" && (
              <input
                type="text"
                name="workedHereWhen"
                value={formData.workedHereWhen}
                onChange={handleChange}
                placeholder="If yes, when?"
                className="input-field mt-2"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you legally allowed to work in the United States? <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="legallyAllowed"
                  value="yes"
                  checked={formData.legallyAllowed === "yes"}
                  onChange={handleChange}
                  required
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="legallyAllowed"
                  value="no"
                  checked={formData.legallyAllowed === "no"}
                  onChange={handleChange}
                  required
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Answering yes to these questions does not constitute an automatic rejection for employment
            </p>
          </div>
        </div>
      </div>

      {/* EMPLOYMENT TYPE */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          TYPE OF EMPLOYMENT DESIRED
        </h4>
        
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="employmentType"
              value="Full-Time"
              checked={formData.employmentType.includes("Full-Time")}
              onChange={handleChange}
              className="rounded text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">Full-Time</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="employmentType"
              value="Part-Time"
              checked={formData.employmentType.includes("Part-Time")}
              onChange={handleChange}
              className="rounded text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">Part-Time</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="employmentType"
              value="Temporary"
              checked={formData.employmentType.includes("Temporary")}
              onChange={handleChange}
              className="rounded text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">Temporary</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="employmentType"
              value="Seasonal"
              checked={formData.employmentType.includes("Seasonal")}
              onChange={handleChange}
              className="rounded text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">Seasonal</span>
          </label>
        </div>

        {position === "Fleet Maintenance Technician" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Driver's License Number (if applicable)
              </label>
              <input
                type="text"
                name="driversLicense"
                value={formData.driversLicense}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                name="licenseState"
                value={formData.licenseState}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>
        )}
      </div>

      {/* EDUCATION HISTORY */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          EDUCATION HISTORY
        </h4>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                High School Name & Location
              </label>
              <input
                type="text"
                name="highSchoolName"
                value={formData.highSchoolName}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Did you graduate?
              </label>
              <select
                name="highSchoolGraduate"
                value={formData.highSchoolGraduate}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                College Name & Location
              </label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years Attended
              </label>
              <input
                type="text"
                name="collegeYears"
                value={formData.collegeYears}
                onChange={handleChange}
                placeholder="e.g., 2015-2019"
                className="input-field"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Trade/Business/Correspondence School
              </label>
              <input
                type="text"
                name="tradeSchoolName"
                value={formData.tradeSchoolName}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years Attended
              </label>
              <input
                type="text"
                name="tradeSchoolYears"
                value={formData.tradeSchoolYears}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SPECIAL SKILLS */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          SUMMARIZE YOUR SPECIAL SKILLS OR QUALIFICATIONS
        </h4>
        
        <textarea
          name="specialSkills"
          value={formData.specialSkills}
          onChange={handleChange}
          rows="4"
          className="input-field"
          placeholder="List any certifications, technical skills, software proficiency, or other relevant qualifications..."
        />
      </div>

      {/* PREVIOUS EMPLOYMENT - Position 1 */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          PREVIOUS EMPLOYMENT (Most Recent Position)
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From Date
            </label>
            <input
              type="text"
              name="employment1From"
              value={formData.employment1From}
              onChange={handleChange}
              placeholder="MM/YYYY"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To Date
            </label>
            <input
              type="text"
              name="employment1To"
              value={formData.employment1To}
              onChange={handleChange}
              placeholder="MM/YYYY or Present"
              className="input-field"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position(s) Held
            </label>
            <input
              type="text"
              name="employment1Position"
              value={formData.employment1Position}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="employment1CompanyName"
              value={formData.employment1CompanyName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="employment1Address"
              value={formData.employment1Address}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="employment1City"
              value={formData.employment1City}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="employment1State"
              value={formData.employment1State}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zip
            </label>
            <input
              type="text"
              name="employment1Zip"
              value={formData.employment1Zip}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="employment1Phone"
              value={formData.employment1Phone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Supervisor
            </label>
            <input
              type="text"
              name="employment1Supervisor"
              value={formData.employment1Supervisor}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Supervisor Title
            </label>
            <input
              type="text"
              name="employment1Title"
              value={formData.employment1Title}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Responsibilities
            </label>
            <textarea
              name="employment1Responsibilities"
              value={formData.employment1Responsibilities}
              onChange={handleChange}
              rows="2"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Starting Salary
            </label>
            <input
              type="text"
              name="employment1StartingSalary"
              value={formData.employment1StartingSalary}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ending Salary
            </label>
            <input
              type="text"
              name="employment1EndingSalary"
              value={formData.employment1EndingSalary}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Leaving
            </label>
            <input
              type="text"
              name="employment1ReasonLeaving"
              value={formData.employment1ReasonLeaving}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              May we contact this employer?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="employment1MayContact"
                  value="yes"
                  checked={formData.employment1MayContact === "yes"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="employment1MayContact"
                  value="no"
                  checked={formData.employment1MayContact === "no"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* RESUME/CV UPLOAD */}
    <div className="bg-gray-50 p-6 rounded-lg">
      <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
        RESUME / CV (Optional)
      </h4>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload your resume or CV
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-primary-50 file:text-primary-700
            hover:file:bg-primary-100
            cursor-pointer"
        />
        <p className="text-xs text-gray-500 mt-2">
          Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
        </p>
        {resumeFile && (
          <p className="text-sm text-green-600 mt-2">
            ✓ {resumeFile.name} selected
          </p>
        )}
      </div>
    </div>

      {/* CERTIFICATION STATEMENT */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          CERTIFICATION & SIGNATURE
        </h4>
        
        <div className="mb-4 p-4 bg-white rounded border border-gray-200 text-sm text-gray-700">
          <p>
            I certify that the facts contained in this application are true and complete to the best of my knowledge and understand that, if employed, falsified statements on this application shall be grounds for dismissal. I authorize investigation of all statements contained herein and the references and employers listed above to give you any and all information concerning my previous employment and any pertinent information they may have, personal or otherwise, and release the company from all liability for any damage that may result from utilization of such information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Signature (Type your full name) <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="applicantSignature"
              value={formData.applicantSignature}
              onChange={handleChange}
              required
              placeholder="Type your full name"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              name="signatureDate"
              value={formData.signatureDate}
              onChange={handleChange}
              className="input-field bg-gray-100"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default GeneralApplicationForm;
