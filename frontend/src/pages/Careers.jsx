// import React, { useState } from "react";
// import { FaTruck, FaWrench, FaLaptop, FaMoneyBillWave, FaClock, FaShieldAlt, FaUsers, FaTimes } from "react-icons/fa";
// import DriverApplicationForm from "../components/careers/DriverApplicationForm";
// import GeneralApplicationForm from "../components/careers/GeneralApplicationForm";

// const Careers = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const benefits = [
//     {
//       icon: <FaMoneyBillWave />,
//       title: "Competitive Pay",
//       description: "Top industry pay with performance bonuses and weekly settlements.",
//     },
//     {
//       icon: <FaClock />,
//       title: "Flexible Schedules",
//       description: "Regional and OTR routes with predictable home time.",
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Full Benefits",
//       description: "Health, dental, vision, and retirement plans available.",
//     },
//     {
//       icon: <FaTruck />,
//       title: "Modern Equipment",
//       description: "Late-model trucks with ELDs, GPS, and safety technology.",
//     },
//     {
//       icon: <FaUsers />,
//       title: "Driver First Culture",
//       description: "Respect, transparency, and 24/7 dispatch support.",
//     },
//   ];

//   const positions = [
//     {
//       id: "cdl-driver",
//       title: "CDL-A Driver",
//       icon: <FaTruck />,
//       description: "Professional long-haul and regional driving positions",
//       details: "Full-time · Competitive pay · Benefits available · Sign-on bonus",
//       requirements: [
//         "Valid Class A CDL",
//         "Minimum 2 years verifiable experience",
//         "Clean driving record",
//         "DOT physical current",
//       ],
//       formType: "driver"
//     },
//     {
//       id: "fleet-tech",
//       title: "Fleet Maintenance Technician",
//       icon: <FaWrench />,
//       description: "Maintain and repair our fleet of 90+ modern trucks",
//       details: "Full-time · Competitive pay · Benefits available",
//       requirements: [
//         "ASE certification preferred",
//         "Heavy-duty truck experience",
//         "Diagnostic expertise",
//         "Valid driver's license",
//       ],
//       formType: "general"
//     },
//     {
//       id: "office",
//       title: "Office Staff",
//       icon: <FaLaptop />,
//       description: "Join our administrative and operations team",
//       details: "Full-time · Competitive pay · Benefits available",
//       requirements: [
//         "Strong communication skills",
//         "Computer proficiency",
//         "Detail-oriented",
//         "Team player",
//       ],
//       formType: "general"
//     },
//   ];

//   const handleApplyClick = (position) => {
//     setSelectedPosition(position);
//     setShowModal(true);
//     setSubmitted(false);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedPosition(null);
//     setSubmitted(false);
//   };

//   const handleSubmitSuccess = () => {
//     setSubmitted(true);
//     setTimeout(() => {
//       handleCloseModal();
//     }, 3000);
//   };

//   return (
//     <main className="pt-20">
//       {/* Hero */}
//       <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold bg-primary-100 text-primary-700 rounded-full">
//             CAREERS AT PETER TRUCKING
//           </span>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
//             Drive Your Career Forward
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
//             Join a company that values safety, respect, and long-term success.
//             We're always looking for professional drivers and logistics talent.
//           </p>

//           <button
//             onClick={() => window.scrollTo({ top: document.getElementById('positions').offsetTop - 100, behavior: 'smooth' })}
//             className="btn-primary"
//           >
//             View Open Positions
//           </button>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-14">
//             <span className="text-sm font-semibold text-primary-600">
//               WHY WORK WITH US
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//               Industry-Leading Benefits
//             </h2>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               We invest in our team and our equipment so you can succeed.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="card-hover"
//               >
//                 <div className="text-primary-600 text-3xl mb-4">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="font-semibold text-lg mb-2 text-gray-900">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   {benefit.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section id="positions" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-14">
//             <span className="text-sm font-semibold text-primary-600">
//               JOIN OUR TEAM
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//               Open Positions
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {positions.map((position) => (
//               <div
//                 key={position.id}
//                 className="card-hover border-2 border-gray-100"
//               >
//                 <div className="text-primary-600 text-4xl mb-4">
//                   {position.icon}
//                 </div>
                
//                 <h3 className="font-bold text-xl mb-2 text-gray-900">
//                   {position.title}
//                 </h3>
                
//                 <p className="text-gray-600 mb-4">
//                   {position.description}
//                 </p>
                
//                 <p className="text-sm text-gray-500 mb-4">
//                   {position.details}
//                 </p>

//                 <div className="mb-6">
//                   <p className="text-sm font-semibold text-gray-700 mb-2">Requirements:</p>
//                   <ul className="text-sm text-gray-600 space-y-1">
//                     {position.requirements.map((req, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <span className="text-primary-600 mt-1">•</span>
//                         <span>{req}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <button
//                   onClick={() => handleApplyClick(position)}
//                   className="w-full btn-primary"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-primary-600 text-white py-16">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Questions About Working With Us?
//           </h2>
//           <p className="mb-8 text-primary-100">
//             Call our recruiting team or submit your application today.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="tel:+17158767600"
//               className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
//             >
//               Call (715) 876-7600
//             </a>
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//               className="btn-outline"
//             >
//               View Positions
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Application Modal */}
//       {showModal && selectedPosition && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
//           <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   {selectedPosition.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Complete the application below
//                 </p>
//               </div>
//               <button
//                 onClick={handleCloseModal}
//                 className="text-gray-500 hover:text-gray-700 transition"
//               >
//                 <FaTimes size={24} />
//               </button>
//             </div>

//             <div className="p-6">
//               {!submitted ? (
//                 selectedPosition.formType === "driver" ? (
//                   <DriverApplicationForm 
//                     position={selectedPosition.title}
//                     onSuccess={handleSubmitSuccess}
//                     onCancel={handleCloseModal}
//                   />
//                 ) : (
//                   <GeneralApplicationForm 
//                     position={selectedPosition.title}
//                     onSuccess={handleSubmitSuccess}
//                     onCancel={handleCloseModal}
//                   />
//                 )
//               ) : (
//                 <div className="text-center py-12">
//                   <div className="text-green-600 text-5xl mb-4">✓</div>
//                   <h4 className="text-2xl font-bold text-gray-900 mb-2">
//                     Application Submitted!
//                   </h4>
//                   <p className="text-gray-600">
//                     Thank you for your interest. Our recruiting team will review
//                     your application and contact you soon.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Careers;

import React, { useState } from "react";
import { FaTruck, FaWrench, FaLaptop, FaMoneyBillWave, FaClock, FaShieldAlt, FaUsers, FaTimes, FaHome} from "react-icons/fa";
import DriverApplicationForm from "../components/careers/DriverApplicationForm";
import GeneralApplicationForm from "../components/careers/GeneralApplicationForm";

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images
  const carouselImages = [
    { src: "img1.jpg"},
    { src: "img3.jpg"},
    { src: "img4.jpg" },
    { src: "img5.jpg"},
  ];

  // Auto-advance carousel every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const benefits = [
    {
      icon: <FaMoneyBillWave />,
      title: "Competitive Pay",
      description: "Top industry pay with performance bonuses and weekly settlements.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Schedules",
      description: "Regional and OTR routes with predictable home time.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Full Benefits",
      description: "Health, dental, vision, and retirement plans available.",
    },
    {
      icon: <FaTruck />,
      title: "Modern Equipment",
      description: "Late-model trucks with ELDs, GPS, and safety technology.",
    },
    {
      icon: <FaUsers />,
      title: "Driver First Culture",
      description: "Respect, transparency, and 24/7 dispatch support.",
    },
    {
      icon: <FaHome />,
      title: "Home Time",
      description: "Consistent schedules with dedicated routes and home time options.",
    },
  ];

  const positions = [
    {
      id: "cdl-driver",
      title: "CDL-A Driver",
      icon: <FaTruck />,
      description: "Professional long-haul and regional driving positions",
      details: "Full-time · Competitive pay · Benefits available · Sign-on bonus",
      requirements: [
        "Valid Class A CDL",
        "Minimum 2 years verifiable experience",
        "Clean driving record",
        "DOT physical current",
      ],
      formType: "driver"
    },
    {
      id: "fleet-tech",
      title: "Fleet Maintenance Technician",
      icon: <FaWrench />,
      description: "Maintain and repair our fleet of 90+ modern trucks",
      details: "Full-time · Competitive pay · Benefits available",
      requirements: [
        "ASE certification preferred",
        "Heavy-duty truck experience",
        "Diagnostic expertise",
        "Valid driver's license",
      ],
      formType: "general"
    },
    {
      id: "office",
      title: "Office Staff",
      icon: <FaLaptop />,
      description: "Join our administrative and operations team",
      details: "Full-time · Competitive pay · Benefits available",
      requirements: [
        "Strong communication skills",
        "Computer proficiency",
        "Detail-oriented",
        "Team player",
      ],
      formType: "general"
    },
  ];

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setShowModal(true);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPosition(null);
    setSubmitted(false);
  };

  const handleSubmitSuccess = () => {
    setSubmitted(true);
    setTimeout(() => {
      handleCloseModal();
    }, 3000);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold bg-red-50 border border-red-100 rounded-full text-gray-700">
                CAREERS AT PETER TRUCKING
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Drive Your Career{" "}
                <span className="text-primary-600">Forward</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join a company that values safety, respect, and long-term success.
                We're always looking for professional drivers and logistics talent.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <button
                  onClick={() => window.scrollTo({ top: document.getElementById('positions')?.offsetTop - 100, behavior: 'smooth' })}
                  className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  View Open Positions
                </button>

                <a
                  href="tel:1-715-257-7121"
                  className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all w-full sm:w-auto text-center"
                >
                  Call Recruiting
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-600">90+</div>
                  <div className="text-sm text-gray-600 mt-1">Team Members</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-600">60+</div>
                  <div className="text-sm text-gray-600 mt-1">Years in Business</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-600">A+</div>
                  <div className="text-sm text-gray-600 mt-1">Safety Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Carousel */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* Carousel Images */}
                <div className="relative h-[500px]">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={`${process.env.PUBLIC_URL}/${image.src}`}
                        alt={image.caption} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="400" height="500" fill="%23e5e7eb"/><text x="50%" y="50%" text-anchor="middle" fill="%239ca3af" font-size="20">Image not found</text></svg>';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-lg font-bold mb-1">{image.caption}</p>
                        <p className="text-sm text-gray-200">{image.subcaption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              Why Work With Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              Industry-Leading Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our team and our equipment so you can succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-primary-300 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-full text-primary-600 text-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              Join Our Team
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your career with Peter Trucking today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {positions.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all flex flex-col"
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full text-primary-600 text-3xl mb-4">
                    {position.icon}
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    {position.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {position.description}
                  </p>
                  
                  <p className="text-xs text-gray-500 font-medium">
                    {position.details}
                  </p>
                </div>

                {/* Requirements */}
                <div className="px-6 pb-6 flex-grow">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-bold text-gray-900 mb-3">Requirements:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary-600 mt-0.5 flex-shrink-0">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply Button - Fixed at bottom */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleApplyClick(position)}
                    className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Working With Us?
          </h2>
          <p className="text-lg mb-8 text-red-100">
            Call our recruiting team or submit your application today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1-715-257-7121"
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-md"
            >
              Call 1-715-257-7121
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all"
            >
              View Positions
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10 rounded-t-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Apply for {selectedPosition.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Complete the application below
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                aria-label="Close modal"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {!submitted ? (
                selectedPosition.formType === "driver" ? (
                  <DriverApplicationForm 
                    position={selectedPosition.title}
                    onSuccess={handleSubmitSuccess}
                    onCancel={handleCloseModal}
                  />
                ) : (
                  <GeneralApplicationForm 
                    position={selectedPosition.title}
                    onSuccess={handleSubmitSuccess}
                    onCancel={handleCloseModal}
                  />
                )
              ) : (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-3">
                    Application Submitted!
                  </h4>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">
                    Thank you for your interest. Our recruiting team will review
                    your application and contact you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Careers;
