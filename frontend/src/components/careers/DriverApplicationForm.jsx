// import React, { useState } from "react";
// import axios from "axios";

// const DriverApplicationForm = ({ position, onSuccess, onCancel }) => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     // Personal Information
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     dateOfBirth: "",
//     ssn: "",
//     dateOfApplication: new Date().toISOString().split('T')[0],
//     position: position,
//     dateAvailable: "",
//     legalToWork: "",

//     // Current Residence
//     currentStreet: "",
//     currentCity: "",
//     currentState: "",
//     currentZip: "",
//     currentYears: "",

//     // Mailing Address (if different)
//     mailingStreet: "",
//     mailingCity: "",
//     mailingState: "",
//     mailingZip: "",
//     mailingYears: "",

//     // License Information
//     licenseState: "",
//     licenseNumber: "",
//     licenseType: "",
//     licenseEndorsements: "",
//     licenseExpiration: "",

//     // Driving Experience
//     straightTruckExp: "",
//     straightTruckDates: "",
//     straightTruckMiles: "",
//     tractorSemiExp: "",
//     tractorSemiDates: "",
//     tractorSemiMiles: "",
//     tankerExp: "",
//     tankerDates: "",
//     tankerMiles: "",

//     // Accident Record
//     accidents: "",

//     // Traffic Violations
//     violations: "",

//     // Background Questions
//     licenseDenied: "",
//     licenseDeniedExplain: "",
//     licenseSuspended: "",
//     licenseSuspendedExplain: "",
//     criminalConviction: "",
//     criminalConvictionExplain: "",
//     pendingCharges: "",
//     pendingChargesExplain: "",

//     // Employment History - Current
//     currentEmployerName: "",
//     currentEmployerPhone: "",
//     currentEmployerAddress: "",
//     currentPosition: "",
//     currentFromDate: "",
//     currentToDate: "",
//     currentSalary: "",
//     currentLeaveReason: "",
//     currentGapsExplain: "",
//     currentFMCSR: "",
//     currentDOTFunction: "",

//     // Employment History - Second
//     secondEmployerName: "",
//     secondEmployerPhone: "",
//     secondEmployerAddress: "",
//     secondPosition: "",
//     secondFromDate: "",
//     secondToDate: "",
//     secondSalary: "",
//     secondLeaveReason: "",
//     secondGapsExplain: "",
//     secondFMCSR: "",
//     secondDOTFunction: "",

//     // Employment History - Third
//     thirdEmployerName: "",
//     thirdEmployerPhone: "",
//     thirdEmployerAddress: "",
//     thirdPosition: "",
//     thirdFromDate: "",
//     thirdToDate: "",
//     thirdSalary: "",
//     thirdLeaveReason: "",
//     thirdGapsExplain: "",
//     thirdFMCSR: "",
//     thirdDOTFunction: "",

//     // Education
//     highSchoolName: "",
//     highSchoolCourse: "",
//     highSchoolYears: "",
//     highSchoolGraduate: "",
//     collegeName: "",
//     collegeCourse: "",
//     collegeYears: "",
//     collegeGraduate: "",

//     // Other Qualifications
//     otherQualifications: "",

//     // Signature
//     applicantSignature: "",
//     signatureDate: new Date().toISOString().split('T')[0],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.firstName || !formData.lastName || !formData.email || 
//         !formData.phone || !formData.dateOfBirth || !formData.ssn) {
//       alert("Please fill in all required personal information fields");
//       return;
//     }

//     if (!formData.legalToWork) {
//       alert("Please confirm your legal right to work in the United States");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post('/api/applications/submit-driver', formData);
      
//       if (response.data.success) {
//         onSuccess();
//       } else {
//         alert("There was an error submitting your application. Please try again.");
//       }
//     } catch (error) {
//       console.error("Application submission error:", error);
//       alert("There was an error submitting your application. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-8">
//       {/* APPLICANT INFORMATION */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           APPLICANT INFORMATION
//         </h4>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               First Name <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Middle Name
//             </label>
//             <input
//               type="text"
//               name="middleName"
//               value={formData.middleName}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Last Name <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               className="input-field"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="input-field"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Date of Birth <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={formData.dateOfBirth}
//               onChange={handleChange}
//               required
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Social Security # <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="text"
//               name="ssn"
//               value={formData.ssn}
//               onChange={handleChange}
//               required
//               placeholder="XXX-XX-XXXX"
//               maxLength="11"
//               className="input-field"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Date Available for Work
//             </label>
//             <input
//               type="date"
//               name="dateAvailable"
//               value={formData.dateAvailable}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Legal right to work in the United States? <span className="text-red-600">*</span>
//             </label>
//             <div className="flex gap-6">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="legalToWork"
//                   value="yes"
//                   checked={formData.legalToWork === "yes"}
//                   onChange={handleChange}
//                   required
//                   className="text-primary-600 focus:ring-primary-500"
//                 />
//                 <span className="text-sm text-gray-700">Yes</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="legalToWork"
//                   value="no"
//                   checked={formData.legalToWork === "no"}
//                   onChange={handleChange}
//                   required
//                   className="text-primary-600 focus:ring-primary-500"
//                 />
//                 <span className="text-sm text-gray-700">No</span>
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CURRENT RESIDENCE */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           CURRENT RESIDENCE
//         </h4>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Street Address
//             </label>
//             <input
//               type="text"
//               name="currentStreet"
//               value={formData.currentStreet}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               City
//             </label>
//             <input
//               type="text"
//               name="currentCity"
//               value={formData.currentCity}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               State
//             </label>
//             <input
//               type="text"
//               name="currentState"
//               value={formData.currentState}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               ZIP Code
//             </label>
//             <input
//               type="text"
//               name="currentZip"
//               value={formData.currentZip}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Years at Address
//             </label>
//             <input
//               type="number"
//               name="currentYears"
//               value={formData.currentYears}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//         </div>
//       </div>

//       {/* LICENSE INFORMATION */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           LICENSE INFORMATION
//         </h4>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               State
//             </label>
//             <input
//               type="text"
//               name="licenseState"
//               value={formData.licenseState}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               License #
//             </label>
//             <input
//               type="text"
//               name="licenseNumber"
//               value={formData.licenseNumber}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Type/Class
//             </label>
//             <input
//               type="text"
//               name="licenseType"
//               value={formData.licenseType}
//               onChange={handleChange}
//               placeholder="e.g., Class A"
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Endorsements
//             </label>
//             <input
//               type="text"
//               name="licenseEndorsements"
//               value={formData.licenseEndorsements}
//               onChange={handleChange}
//               placeholder="e.g., H, N, T"
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Expiration Date
//             </label>
//             <input
//               type="date"
//               name="licenseExpiration"
//               value={formData.licenseExpiration}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//         </div>
//       </div>

//       {/* DRIVING EXPERIENCE */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           DRIVING EXPERIENCE
//         </h4>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Tractor & Semi-Trailer Experience
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <input
//                 type="text"
//                 name="tractorSemiExp"
//                 value={formData.tractorSemiExp}
//                 onChange={handleChange}
//                 placeholder="Equipment type (VAN, FLATBED, etc.)"
//                 className="input-field"
//               />
//               <input
//                 type="text"
//                 name="tractorSemiDates"
//                 value={formData.tractorSemiDates}
//                 onChange={handleChange}
//                 placeholder="Date range (MM/YY - MM/YY)"
//                 className="input-field"
//               />
//               <input
//                 type="text"
//                 name="tractorSemiMiles"
//                 value={formData.tractorSemiMiles}
//                 onChange={handleChange}
//                 placeholder="Approx. total miles"
//                 className="input-field"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Tanker Experience
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <input
//                 type="text"
//                 name="tankerExp"
//                 value={formData.tankerExp}
//                 onChange={handleChange}
//                 placeholder="Equipment type"
//                 className="input-field"
//               />
//               <input
//                 type="text"
//                 name="tankerDates"
//                 value={formData.tankerDates}
//                 onChange={handleChange}
//                 placeholder="Date range"
//                 className="input-field"
//               />
//               <input
//                 type="text"
//                 name="tankerMiles"
//                 value={formData.tankerMiles}
//                 onChange={handleChange}
//                 placeholder="Approx. total miles"
//                 className="input-field"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ACCIDENT & VIOLATION RECORD */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           ACCIDENT & VIOLATION RECORD (Past 3 Years)
//         </h4>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Accidents (List dates, nature, fatalities, injuries)
//             </label>
//             <textarea
//               name="accidents"
//               value={formData.accidents}
//               onChange={handleChange}
//               rows="3"
//               placeholder="None or list details..."
//               className="input-field"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Traffic Violations (List dates, violations, states, penalties)
//             </label>
//             <textarea
//               name="violations"
//               value={formData.violations}
//               onChange={handleChange}
//               rows="3"
//               placeholder="None or list details..."
//               className="input-field"
//             />
//           </div>
//         </div>
//       </div>

//       {/* BACKGROUND QUESTIONS */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           BACKGROUND QUESTIONS
//         </h4>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Have you ever been denied a license, permit, or privilege to operate a motor vehicle?
//             </label>
//             <div className="flex gap-6 mb-2">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="licenseDenied"
//                   value="no"
//                   checked={formData.licenseDenied === "no"}
//                   onChange={handleChange}
//                   className="text-primary-600 focus:ring-primary-500"
//                 />
//                 <span className="text-sm">No</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="licenseDenied"
//                   value="yes"
//                   checked={formData.licenseDenied === "yes"}
//                   onChange={handleChange}
//                   className="text-primary-600 focus:ring-primary-500"
//                 />
//                 <span className="text-sm">Yes</span>
//               </label>
//             </div>
//             {formData.licenseDenied === "yes" && (
//               <input
//                 type="text"
//                 name="licenseDeniedExplain"
//                 value={formData.licenseDeniedExplain}
//                 onChange={handleChange}
//                 placeholder="Please explain"
//                 className="input-field mt-2"
//               />
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Has any license, permit, or privilege ever been suspended or revoked?
//             </label>
//             <div className="flex gap-6 mb-2">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="licenseSuspended"
//                   value="no"
//                   checked={formData.licenseSuspended === "no"}
//                   onChange={handleChange}
//                   className="text-primary-600 focus:ring-primary-500"
//                 />
//                 <span className="text-sm">No</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="licenseSuspended"
//                   value="yes"
//                   checked={formData.licenseSuspended === "yes"}
//                   onChange={handleChange}
//                   className="text-primary-600 focus:ring-primary-500"
//                 />
//                 <span className="text-sm">Yes</span>
//               </label>
//             </div>
//             {formData.licenseSuspended === "yes" && (
//               <input
//                 type="text"
//                 name="licenseSuspendedExplain"
//                 value={formData.licenseSuspendedExplain}
//                 onChange={handleChange}
//                 placeholder="Please explain"
//                 className="input-field mt-2"
//               />
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Have you ever been convicted of a crime?
//             </label>
//             <div className="flex gap-6 mb-2">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="criminalConviction"
//                   value="no"
//                   checked={formData.criminalConviction === "no"}
//                   onChange={handleChange}
//                   className="text-primary-600 focus:ring-primary-500"
//                 />
//                 <span className="text-sm">No</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="criminalConviction"
//                   value="yes"
//                   checked={formData.criminalConviction === "yes"}
//                   onChange={handleChange}
//                   className="text-primary-600 focus:ring-primary-500"
//                 />
//                 <span className="text-sm">Yes</span>
//               </label>
//             </div>
//             {formData.criminalConviction === "yes" && (
//               <input
//                 type="text"
//                 name="criminalConvictionExplain"
//                 value={formData.criminalConvictionExplain}
//                 onChange={handleChange}
//                 placeholder="Please explain"
//                 className="input-field mt-2"
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* EMPLOYMENT HISTORY - CURRENT */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           CURRENT (MOST RECENT) EMPLOYER
//         </h4>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Employer Name
//             </label>
//             <input
//               type="text"
//               name="currentEmployerName"
//               value={formData.currentEmployerName}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone
//             </label>
//             <input
//               type="tel"
//               name="currentEmployerPhone"
//               value={formData.currentEmployerPhone}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Address
//             </label>
//             <input
//               type="text"
//               name="currentEmployerAddress"
//               value={formData.currentEmployerAddress}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Position Held
//             </label>
//             <input
//               type="text"
//               name="currentPosition"
//               value={formData.currentPosition}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               From Date (MM/YY)
//             </label>
//             <input
//               type="text"
//               name="currentFromDate"
//               value={formData.currentFromDate}
//               onChange={handleChange}
//               placeholder="MM/YY"
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               To Date (MM/YY)
//             </label>
//             <input
//               type="text"
//               name="currentToDate"
//               value={formData.currentToDate}
//               onChange={handleChange}
//               placeholder="MM/YY or Present"
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Reason for Leaving
//             </label>
//             <input
//               type="text"
//               name="currentLeaveReason"
//               value={formData.currentLeaveReason}
//               onChange={handleChange}
//               className="input-field"
//             />
//           </div>
//         </div>
//       </div>

//       {/* EDUCATION */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           EDUCATION
//         </h4>
        
//         <div className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 High School Name & Location
//               </label>
//               <input
//                 type="text"
//                 name="highSchoolName"
//                 value={formData.highSchoolName}
//                 onChange={handleChange}
//                 className="input-field"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Did you graduate?
//               </label>
//               <select
//                 name="highSchoolGraduate"
//                 value={formData.highSchoolGraduate}
//                 onChange={handleChange}
//                 className="input-field"
//               >
//                 <option value="">Select</option>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 College Name & Location
//               </label>
//               <input
//                 type="text"
//                 name="collegeName"
//                 value={formData.collegeName}
//                 onChange={handleChange}
//                 className="input-field"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Did you graduate?
//               </label>
//               <select
//                 name="collegeGraduate"
//                 value={formData.collegeGraduate}
//                 onChange={handleChange}
//                 className="input-field"
//               >
//                 <option value="">Select</option>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* OTHER QUALIFICATIONS */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           OTHER QUALIFICATIONS
//         </h4>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Please list any other qualifications that you have and which you believe should be considered
//           </label>
//           <textarea
//             name="otherQualifications"
//             value={formData.otherQualifications}
//             onChange={handleChange}
//             rows="4"
//             className="input-field"
//           />
//         </div>
//       </div>

//       {/* SIGNATURE */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
//           AUTHORIZATION & SIGNATURE
//         </h4>
        
//         <div className="mb-4 p-4 bg-white rounded border border-gray-200 text-sm text-gray-700">
//           <p className="mb-2">
//             I authorize you to make investigations (including contacting current and prior employers) into my personal, employment, financial, medical history, and other related matters as may be necessary in arriving at an employment decision.
//           </p>
//           <p className="mb-2">
//             In the event of employment, I understand that false or misleading information given in my application or interview(s) may result in discharge.
//           </p>
//           <p>
//             This certifies that I completed this application, and that all entries on it and information in it are true and complete to the best of my knowledge.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name (Type to sign) <span className="text-red-600">*</span>
//             </label>
//             <input
//               type="text"
//               name="applicantSignature"
//               value={formData.applicantSignature}
//               onChange={handleChange}
//               required
//               placeholder="Type your full name"
//               className="input-field"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Date
//             </label>
//             <input
//               type="date"
//               name="signatureDate"
//               value={formData.signatureDate}
//               onChange={handleChange}
//               className="input-field bg-gray-100"
//               readOnly
//             />
//           </div>
//         </div>
//       </div>

//       {/* Form Actions */}
//       <div className="flex gap-4 pt-4">
//         <button
//           type="submit"
//           disabled={loading}
//           className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? "Submitting..." : "Submit Application"}
//         </button>
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };

// export default DriverApplicationForm;

import React, { useState } from "react";
// import axios from "axios";
import { applicationService } from "../../services/applicationService";

const DriverApplicationForm = ({ position, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [resumeFile, setResumeFile] = useState(null);
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    ssnLast4: "", // Changed from full SSN to last 4 only
    dateOfApplication: new Date().toISOString().split('T')[0],
    position: position,
    dateAvailable: "",
    legalToWork: "",

    // Current Residence
    currentStreet: "",
    currentCity: "",
    currentState: "",
    currentZip: "",
    currentYears: "",

    // License Information
    licenseState: "",
    licenseNumber: "",
    licenseType: "",
    licenseEndorsements: "",
    licenseExpiration: "",

    // Driving Experience
    tractorSemiExp: "",
    tractorSemiDates: "",
    tractorSemiMiles: "",
    tankerExp: "",
    tankerDates: "",
    tankerMiles: "",

    // Accident Record
    accidents: "",

    // Traffic Violations
    violations: "",

    // Background Questions
    licenseDenied: "",
    licenseDeniedExplain: "",
    licenseSuspended: "",
    licenseSuspendedExplain: "",
    criminalConviction: "",
    criminalConvictionExplain: "",

    // Employment History - Current
    currentEmployerName: "",
    currentEmployerPhone: "",
    currentEmployerAddress: "",
    currentPosition: "",
    currentFromDate: "",
    currentToDate: "",
    currentLeaveReason: "",

    // Education
    highSchoolName: "",
    highSchoolGraduate: "",
    collegeName: "",
    collegeGraduate: "",

    // Other Qualifications
    otherQualifications: "",

    // Signature
    applicantSignature: "",
    signatureDate: new Date().toISOString().split('T')[0],
  });

  // Validation regex patterns
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
    zip: /^\d{5}$/,
    name: /^[a-zA-Z\s'-]+$/,
    ssnLast4: /^\d{4}$/,
  };

  // Phone number formatting
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

  // ZIP code formatting
  const formatZip = (value) => {
    return value.replace(/\D/g, '').slice(0, 5);
  };

  // SSN Last 4 formatting
  const formatSSNLast4 = (value) => {
    return value.replace(/\D/g, '').slice(0, 4);
  };

  // Name formatting (letters, spaces, hyphens, apostrophes only)
  const formatName = (value) => {
    return value.replace(/[^a-zA-Z\s'-]/g, '');
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (value && !patterns.email.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
      case 'currentEmployerPhone':
        if (value && !patterns.phone.test(value.replace(/\D/g, ''))) {
          error = 'Please enter a valid 10-digit phone number';
        }
        break;
      case 'currentZip':
        if (value && !patterns.zip.test(value)) {
          error = 'Please enter a valid 5-digit ZIP code';
        }
        break;
      case 'firstName':
      case 'lastName':
      case 'middleName':
        if (value && !patterns.name.test(value)) {
          error = 'Please use only letters, spaces, hyphens, and apostrophes';
        }
        break;
      case 'ssnLast4':
        if (value && !patterns.ssnLast4.test(value)) {
          error = 'Please enter exactly 4 digits';
        }
        break;
      default:
        break;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Apply formatting
    if (name === 'phone' || name === 'currentEmployerPhone') {
      value = formatPhoneNumber(value);
    } else if (name === 'currentZip') {
      value = formatZip(value);
    } else if (name === 'ssnLast4') {
      value = formatSSNLast4(value);
    } else if (name === 'firstName' || name === 'lastName' || name === 'middleName') {
      value = formatName(value);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

      console.log("Using applicationService:", applicationService); // ADD THIS
      console.log("API_URL:", process.env.REACT_APP_API_URL); // ADD THIS

      
    // Validate all required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'ssnLast4'];
    let hasErrors = false;

    requiredFields.forEach(field => {
      if (!formData[field]) {
        setErrors(prev => ({ ...prev, [field]: 'This field is required' }));
        hasErrors = true;
      } else {
        const isValid = validateField(field, formData[field]);
        if (!isValid) hasErrors = true;
      }
    });

    if (!formData.legalToWork) {
      alert("Please confirm your legal right to work in the United States");
      return;
    }

    if (hasErrors) {
      alert("Please fix the errors in the form before submitting");
      return;
    }

    setLoading(true);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });

      // Add resume file if present
      if (resumeFile) {
        submitData.append('resume', resumeFile);
      }

      const response = await applicationService.submitGeneralApplication(submitData);
      
      if (response.data.success) {
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
      {/* APPLICANT INFORMATION */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          APPLICANT INFORMATION
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
            />
            {errors.firstName && <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className={`input-field ${errors.middleName ? 'border-red-500' : ''}`}
            />
            {errors.middleName && <p className="text-red-600 text-xs mt-1">{errors.middleName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
            />
            {errors.lastName && <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
              placeholder="(123) 456-7890"
              className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`input-field ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
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
              placeholder="1234"
              maxLength="4"
              className={`input-field ${errors.ssnLast4 ? 'border-red-500' : ''}`}
            />
            {errors.ssnLast4 && <p className="text-red-600 text-xs mt-1">{errors.ssnLast4}</p>}
            <p className="text-xs text-gray-500 mt-1">For security, we only collect the last 4 digits</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Available for Work
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Legal right to work in the United States? <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="legalToWork"
                  value="yes"
                  checked={formData.legalToWork === "yes"}
                  onChange={handleChange}
                  required
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="legalToWork"
                  value="no"
                  checked={formData.legalToWork === "no"}
                  onChange={handleChange}
                  required
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* CURRENT RESIDENCE */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          CURRENT RESIDENCE
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="currentStreet"
              value={formData.currentStreet}
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
              name="currentCity"
              value={formData.currentCity}
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
              name="currentState"
              value={formData.currentState}
              onChange={handleChange}
              maxLength="2"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              name="currentZip"
              value={formData.currentZip}
              onChange={handleChange}
              placeholder="12345"
              className={`input-field ${errors.currentZip ? 'border-red-500' : ''}`}
            />
            {errors.currentZip && <p className="text-red-600 text-xs mt-1">{errors.currentZip}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Years at Address
            </label>
            <input
              type="number"
              name="currentYears"
              value={formData.currentYears}
              onChange={handleChange}
              min="0"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* LICENSE INFORMATION */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          LICENSE INFORMATION
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="licenseState"
              value={formData.licenseState}
              onChange={handleChange}
              maxLength="2"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              License #
            </label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type/Class
            </label>
            <input
              type="text"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              placeholder="e.g., Class A"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Endorsements
            </label>
            <input
              type="text"
              name="licenseEndorsements"
              value={formData.licenseEndorsements}
              onChange={handleChange}
              placeholder="e.g., H, N, T"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiration Date
            </label>
            <input
              type="date"
              name="licenseExpiration"
              value={formData.licenseExpiration}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* DRIVING EXPERIENCE */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          DRIVING EXPERIENCE
        </h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tractor & Semi-Trailer Experience
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="tractorSemiExp"
                value={formData.tractorSemiExp}
                onChange={handleChange}
                placeholder="Equipment type (VAN, FLATBED, etc.)"
                className="input-field"
              />
              <input
                type="text"
                name="tractorSemiDates"
                value={formData.tractorSemiDates}
                onChange={handleChange}
                placeholder="Date range (MM/YY - MM/YY)"
                className="input-field"
              />
              <input
                type="text"
                name="tractorSemiMiles"
                value={formData.tractorSemiMiles}
                onChange={handleChange}
                placeholder="Approx. total miles"
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tanker Experience
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="tankerExp"
                value={formData.tankerExp}
                onChange={handleChange}
                placeholder="Equipment type"
                className="input-field"
              />
              <input
                type="text"
                name="tankerDates"
                value={formData.tankerDates}
                onChange={handleChange}
                placeholder="Date range"
                className="input-field"
              />
              <input
                type="text"
                name="tankerMiles"
                value={formData.tankerMiles}
                onChange={handleChange}
                placeholder="Approx. total miles"
                className="input-field"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ACCIDENT & VIOLATION RECORD */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          ACCIDENT & VIOLATION RECORD (Past 3 Years)
        </h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Accidents (List dates, nature, fatalities, injuries)
            </label>
            <textarea
              name="accidents"
              value={formData.accidents}
              onChange={handleChange}
              rows="3"
              placeholder="None or list details..."
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Traffic Violations (List dates, violations, states, penalties)
            </label>
            <textarea
              name="violations"
              value={formData.violations}
              onChange={handleChange}
              rows="3"
              placeholder="None or list details..."
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* BACKGROUND QUESTIONS */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          BACKGROUND QUESTIONS
        </h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Have you ever been denied a license, permit, or privilege to operate a motor vehicle?
            </label>
            <div className="flex gap-6 mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="licenseDenied"
                  value="no"
                  checked={formData.licenseDenied === "no"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">No</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="licenseDenied"
                  value="yes"
                  checked={formData.licenseDenied === "yes"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">Yes</span>
              </label>
            </div>
            {formData.licenseDenied === "yes" && (
              <input
                type="text"
                name="licenseDeniedExplain"
                value={formData.licenseDeniedExplain}
                onChange={handleChange}
                placeholder="Please explain"
                className="input-field mt-2"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Has any license, permit, or privilege ever been suspended or revoked?
            </label>
            <div className="flex gap-6 mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="licenseSuspended"
                  value="no"
                  checked={formData.licenseSuspended === "no"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">No</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="licenseSuspended"
                  value="yes"
                  checked={formData.licenseSuspended === "yes"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">Yes</span>
              </label>
            </div>
            {formData.licenseSuspended === "yes" && (
              <input
                type="text"
                name="licenseSuspendedExplain"
                value={formData.licenseSuspendedExplain}
                onChange={handleChange}
                placeholder="Please explain"
                className="input-field mt-2"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Have you ever been convicted of a crime?
            </label>
            <div className="flex gap-6 mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="criminalConviction"
                  value="no"
                  checked={formData.criminalConviction === "no"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">No</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="criminalConviction"
                  value="yes"
                  checked={formData.criminalConviction === "yes"}
                  onChange={handleChange}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">Yes</span>
              </label>
            </div>
            {formData.criminalConviction === "yes" && (
              <input
                type="text"
                name="criminalConvictionExplain"
                value={formData.criminalConvictionExplain}
                onChange={handleChange}
                placeholder="Please explain"
                className="input-field mt-2"
              />
            )}
          </div>
        </div>
      </div>

      {/* EMPLOYMENT HISTORY - CURRENT */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          CURRENT (MOST RECENT) EMPLOYER
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employer Name
            </label>
            <input
              type="text"
              name="currentEmployerName"
              value={formData.currentEmployerName}
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
              name="currentEmployerPhone"
              value={formData.currentEmployerPhone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className={`input-field ${errors.currentEmployerPhone ? 'border-red-500' : ''}`}
            />
            {errors.currentEmployerPhone && <p className="text-red-600 text-xs mt-1">{errors.currentEmployerPhone}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="currentEmployerAddress"
              value={formData.currentEmployerAddress}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position Held
            </label>
            <input
              type="text"
              name="currentPosition"
              value={formData.currentPosition}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From Date (MM/YY)
            </label>
            <input
              type="text"
              name="currentFromDate"
              value={formData.currentFromDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To Date (MM/YY)
            </label>
            <input
              type="text"
              name="currentToDate"
              value={formData.currentToDate}
              onChange={handleChange}
              placeholder="MM/YY or Present"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Leaving
            </label>
            <input
              type="text"
              name="currentLeaveReason"
              value={formData.currentLeaveReason}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          EDUCATION
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
                Did you graduate?
              </label>
              <select
                name="collegeGraduate"
                value={formData.collegeGraduate}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER QUALIFICATIONS */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          OTHER QUALIFICATIONS
        </h4>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Please list any other qualifications that you have and which you believe should be considered
          </label>
          <textarea
            name="otherQualifications"
            value={formData.otherQualifications}
            onChange={handleChange}
            rows="4"
            className="input-field"
          />
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

      {/* SIGNATURE */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
          AUTHORIZATION & SIGNATURE
        </h4>
        
        <div className="mb-4 p-4 bg-white rounded border border-gray-200 text-sm text-gray-700">
          <p className="mb-2">
            I authorize you to make investigations (including contacting current and prior employers) into my personal, employment, financial, medical history, and other related matters as may be necessary in arriving at an employment decision.
          </p>
          <p className="mb-2">
            In the event of employment, I understand that false or misleading information given in my application or interview(s) may result in discharge.
          </p>
          <p>
            This certifies that I completed this application, and that all entries on it and information in it are true and complete to the best of my knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name (Type to sign) <span className="text-red-600">*</span>
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

export default DriverApplicationForm;
