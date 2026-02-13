// import React from "react";
// import {
//   FaTruck,
//   FaTools,
//   FaMapMarkedAlt,
//   FaChartLine,
//   FaSatellite,
//   FaShieldAlt,
// } from "react-icons/fa";

// const Fleet = () => {
//   const stats = [
//     {
//       icon: <FaTruck />,
//       number: "90+",
//       label: "Modern Trucks",
//       color: "from-red-500 to-red-600",
//     },
//     {
//       icon: <FaShieldAlt />,
//       number: "100%",
//       label: "DOT Compliant",
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       icon: <FaSatellite />,
//       number: "24/7",
//       label: "GPS Monitored",
//       color: "from-red-600 to-pink-600",
//     },
//     {
//       icon: <FaChartLine />,
//       number: "99%",
//       label: "On-Time Rate",
//       color: "from-pink-500 to-red-500",
//     },
//   ];

//   const fleetFeatures = [
//     {
//       title: "Equipment Excellence",
//       items: [
//         "Late model trucks (avg. 3 years old)",
//         "Regular preventive maintenance",
//         "State-of-the-art safety systems",
//         "Climate control capabilities",
//       ],
//     },
//     {
//       title: "Technology Integration",
//       items: [
//         "Real-time GPS tracking",
//         "Electronic logging devices (ELD)",
//         "Digital dispatch systems",
//         "Load optimization software",
//       ],
//     },
//     {
//       title: "Safety Standards",
//       items: [
//         "Pre-trip inspection protocol",
//         "Driver safety training programs",
//         "Accident prevention systems",
//         "Comprehensive insurance coverage",
//       ],
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-sm font-semibold text-primary-600">
//             OUR FLEET
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
//             Modern Equipment
//           </h2>
//           <p className="text-gray-600 mt-4">
//             State-of-the-art trucks maintained to the highest industry standards
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className={`rounded-xl text-white p-6 bg-gradient-to-br ${stat.color}`}
//             >
//               <div className="text-3xl mb-2">{stat.icon}</div>
//               <div className="text-3xl font-bold">{stat.number}</div>
//               <div className="text-sm opacity-90">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           {fleetFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md p-6"
//             >
//               <h3 className="font-semibold text-gray-900 mb-4">
//                 {feature.title}
//               </h3>
//               <ul className="space-y-2">
//                 {feature.items.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-2 text-sm text-gray-700"
//                   >
//                     <FaTools className="text-primary-600 mt-1" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA Card */}
//         <div className="bg-white rounded-xl shadow-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Industry Leading Safety Record
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Our commitment to safety isn&apos;t just a policy — it&apos;s our
//               promise. Every truck, every driver, every mile.
//             </p>

//             <ul className="space-y-3">
//               <li className="flex items-center gap-2 text-gray-700">
//                 <FaShieldAlt className="text-primary-600" />
//                 Zero tolerance safety policy
//               </li>
//               <li className="flex items-center gap-2 text-gray-700">
//                 <FaShieldAlt className="text-primary-600" />
//                 Regular driver training & certification
//               </li>
//               <li className="flex items-center gap-2 text-gray-700">
//                 <FaShieldAlt className="text-primary-600" />
//                 24/7 emergency support
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-gray-900 mb-4">
//               Fleet Certifications
//             </h4>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 "DOT Certified",
//                 "FMCSA Compliant",
//                 "SmartWay Partner",
//                 "Hazmat Endorsed",
//               ].map((cert, i) => (
//                 <div
//                   key={i}
//                   className="border rounded-lg p-4 text-center"
//                 >
//                   <div className="font-semibold text-gray-800">
//                     {cert}
//                   </div>
//                   <div className="text-sm text-green-600">
//                     Verified
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Fleet;

import React from "react";
import {
  FaTruck,
  FaSatellite,
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const Fleet = () => {
  const stats = [
    {
      icon: <FaTruck />,
      number: "90+",
      label: "Modern Trucks",
    },
    {
      icon: <FaShieldAlt />,
      number: "100%",
      label: "DOT Compliant",
    },
    {
      icon: <FaSatellite />,
      number: "24/7",
      label: "GPS Monitored",
    },
    {
      icon: <FaClock />,
      number: "99%",
      label: "On-Time Rate",
    },
  ];

  const fleetFeatures = [
    {
      title: "Equipment Excellence",
      items: [
        "Late model trucks (avg. 3 years old)",
        "Regular preventive maintenance",
        "State-of-the-art safety systems",
        "Climate control capabilities",
      ],
    },
    {
      title: "Technology Integration",
      items: [
        "Real-time GPS tracking",
        "Electronic logging devices (ELD)",
        "Digital dispatch systems",
        "Load optimization software",
      ],
    },
    {
      title: "Safety Standards",
      items: [
        "Pre-trip inspection protocol",
        "Driver safety training programs",
        "Accident prevention systems",
        "Comprehensive insurance coverage",
      ],
    },
  ];

  const certifications = [
    "DOT Certified",
    "FMCSA Compliant",
    "SmartWay Partner",
    "Hazmat Endorsed",
  ];

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
            Our Fleet
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Modern Equipment
          </h2>
          <p className="text-lg text-gray-600">
            State-of-the-art trucks maintained to the highest industry standards
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-full text-primary-600 text-2xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Fleet Image Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
          <img 
            src={`${process.env.PUBLIC_URL}/img2.jpg`}
            alt="Peter Trucking Fleet" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 lg:px-12 max-w-2xl text-white">
              <h3 className="text-3xl font-bold mb-3">
                Industry Leading Safety Record
              </h3>
              <p className="text-lg text-gray-200 mb-6">
                Our commitment to safety isn't just a policy — it's our promise. 
                Every truck, every driver, every mile.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Zero tolerance safety policy", "24/7 emergency support", "Regular driver training"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaCheckCircle className="text-green-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {fleetFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-primary-300 transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-sm text-gray-700"
                  >
                    <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Fleet Certifications
            </h3>
            <p className="text-gray-600">
              Meeting and exceeding industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:border-primary-300 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <FaShieldAlt className="text-green-600 text-xl" />
                </div>
                <div className="font-semibold text-gray-800 mb-1">
                  {cert}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  ✓ Verified
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Fleet;
