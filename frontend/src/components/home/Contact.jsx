// import React, { useState } from "react";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
// } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     serviceType: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Contact form submitted:", formData);
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         serviceType: "",
//         message: "",
//       });
//     }, 3000);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const contactInfo = [
//     {
//       icon: <FaPhone />,
//       title: "Call Us",
//       details: ["1-715-257-7121"],
//       link: "tel:1-715-257-7121",
//     },
//     {
//       icon: <FaEnvelope />,
//       title: "Email Us",
//       details: ["tom@thepetercompanies.com"],
//       link: "mailto:tom@thepetercompanies.com",
//     },
//     {
//       icon: <FaMapMarkerAlt />,
//       title: "Visit Us",
//       details: ["118576 County Highway A", "Athens, WI 54411"],
//       link: "https://maps.google.com/?q=118576+County+Highway+A+Athens+WI+54411",
//     },
//     {
//       icon: <FaClock />,
//       title: "Business Hours",
//       details: ["Mon–Fri: 8AM – 6PM", "Dispatch: 24/7/365"],
//       link: null,
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
//             Get in Touch
//           </span>
//           <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
//             Contact Us
//           </h2>
//           <p className="text-lg text-gray-600">
//             Ready to ship? Need a quote? Our team is here to help 24/7.
//           </p>
//         </div>

//         {/* Contact Info Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {contactInfo.map((info, index) => (
//             <a
//               key={index}
//               href={info.link || "#"}
//               target={info.link && info.link.startsWith("http") ? "_blank" : "_self"}
//               rel="noopener noreferrer"
//               className={`bg-primary-600 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all ${
//                 info.link ? "cursor-pointer hover:bg-primary-700" : ""
//               }`}
//             >
//               <div className="text-3xl mb-3">{info.icon}</div>
//               <h3 className="font-semibold mb-2">{info.title}</h3>
//               <ul className="text-sm space-y-1 text-red-100">
//                 {info.details.map((detail, i) => (
//                   <li key={i}>{detail}</li>
//                 ))}
//               </ul>
//             </a>
//           ))}
//         </div>

//         {/* Form + Info */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* Contact Form */}
//           <div className="lg:col-span-2 bg-gray-50 rounded-2xl border border-gray-200 p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

//             {submitted ? (
//               <div className="text-center py-12">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//                   <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <p className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</p>
//                 <p className="text-gray-600">
//                   We'll get back to you within 24 hours.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your Name *"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
//                   />
//                   <input
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     placeholder="Company"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <input
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email *"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
//                   />
//                   <input
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
//                   />
//                 </div>

//                 <select
//                   name="serviceType"
//                   value={formData.serviceType}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
//                 >
//                   <option value="">Select a service</option>
//                   <option>Hopper Hauling</option>
//                   <option>Dry Van Transport</option>
//                   <option>Refrigerated (Reefer)</option>
//                   <option>General Quote Request</option>
//                 </select>

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message *"
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
//                 />

//                 <button 
//                   type="submit" 
//                   className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* Sidebar Info */}
//           <div className="space-y-6">
//             <div className="bg-primary-600 text-white rounded-xl p-6 shadow-md">
//               <h4 className="font-bold mb-3 text-lg">Emergency Dispatch</h4>
//               <p className="text-sm text-red-100 mb-4">
//                 Immediate assistance available 24/7/365.
//               </p>
//               <a 
//                 href="tel:1-715-257-7121"
//                 className="flex items-center space-x-2 font-semibold hover:underline"
//               >
//                 <FaPhone />
//                 <span>1-715-257-7121</span>
//               </a>
//             </div>

//             <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
//               <h4 className="font-bold text-gray-900 mb-3">Request a Quote</h4>
//               <p className="text-sm text-gray-600 mb-3">Include these details for fastest response:</p>
//               <ul className="text-sm text-gray-700 space-y-2">
//                 <li className="flex items-start space-x-2">
//                   <span className="text-primary-600">•</span>
//                   <span>Pickup & delivery locations</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="text-primary-600">•</span>
//                   <span>Freight type and weight</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="text-primary-600">•</span>
//                   <span>Special handling requirements</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="text-primary-600">•</span>
//                   <span>Desired dates</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="text-primary-600">•</span>
//                   <span>Equipment type needed</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Map Placeholder */}
//             <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-500 border border-gray-300">
//               <div className="text-center">
//                 <FaMapMarkerAlt className="text-4xl mb-2 mx-auto" />
//                 <p className="text-sm font-medium">Map Integration</p>
//                 <p className="text-xs">Athens, WI 54411</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: ["1-715-257-7121"],
      link: "tel:1-715-257-7121",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: ["tom@thepetercompanies.com"],
      link: "mailto:tom@thepetercompanies.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: ["118576 County Highway A", "Athens, WI 54411"],
      link: "https://maps.google.com/?q=118576+County+Highway+A+Athens+WI+54411",
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Mon–Fri: 8AM – 6PM", "Dispatch: 24/7/365"],
      link: null,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Ready to ship? Need a quote? Our team is here to help 24/7.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link || "#"}
              target={info.link && info.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`bg-primary-600 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all ${
                info.link ? "cursor-pointer hover:bg-primary-700" : ""
              }`}
            >
              <div className="text-3xl mb-3">{info.icon}</div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              <ul className="text-sm space-y-1 text-red-100">
                {info.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        {/* Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</p>
                <p className="text-gray-600">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                </div>

                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option>Hopper Hauling</option>
                  <option>Dry Van Transport</option>
                  <option>Refrigerated (Reefer)</option>
                  <option>General Quote Request</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                />

                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-primary-600 text-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold mb-3 text-lg">Emergency Dispatch</h4>
              <p className="text-sm text-red-100 mb-4">
                Immediate assistance available 24/7/365.
              </p>
              <a 
                href="tel:1-715-257-7121"
                className="flex items-center space-x-2 font-semibold hover:underline"
              >
                <FaPhone />
                <span>1-715-257-7121</span>
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Request a Quote</h4>
              <p className="text-sm text-gray-600 mb-3">Include these details for fastest response:</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Pickup & delivery locations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Freight type and weight</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Special handling requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Desired dates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Equipment type needed</span>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-300">
              <iframe
                title="Peter Trucking Location"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55480.8105952186!2d-90.15515285136718!3d45.0034407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52aaadeb5fde6b99%3A0x2aba0ff9084357d0!2sPeter%20Trucking%20LLC!5e1!3m2!1sen!2sus!4v1771017279994!5m2!1sen!2sus"
                width="100%"
                height="192"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;