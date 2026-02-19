// import React from "react";
// import {
//   FaHandshake,
//   FaShieldAlt,
//   FaClock,
//   FaUsers,
// } from "react-icons/fa";

// const About = () => {
//   const values = [
//     {
//       icon: <FaHandshake />,
//       title: "Integrity",
//       description: "Honest business practices and transparent communication",
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Safety First",
//       description: "Uncompromising commitment to safe operations",
//     },
//     {
//       icon: <FaClock />,
//       title: "Reliability",
//       description: "On-time delivery you can count on",
//     },
//     {
//       icon: <FaUsers />,
//       title: "People Focused",
//       description: "Treating drivers and customers like family",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* Left Content */}
//         <div>
//           <span className="text-sm font-semibold text-primary-600">
//             ABOUT US
//           </span>

//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
//             25+ Years of Trucking Excellence
//           </h2>

//           <p className="text-gray-600 mb-4">
//             Founded in 1995, Peter Trucking has grown from a single truck operation
//             to one of the Midwest&apos;s most trusted freight carriers. Our
//             commitment to quality service and driver satisfaction has made us an
//             industry leader.
//           </p>

//           <p className="text-gray-600 mb-8">
//             Today, our fleet of 90+ modern trucks serves businesses coast to coast,
//             specializing in hopper, dry van, and refrigerated transport. Every
//             load is handled with the same care and professionalism that built our
//             reputation.
//           </p>

//           {/* Stats */}
//           <div className="flex gap-10 mb-8">
//             <div>
//               <div className="text-3xl font-bold text-primary-600">10M+</div>
//               <div className="text-sm text-gray-600">
//                 Miles Driven Safely
//               </div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-primary-600">500+</div>
//               <div className="text-sm text-gray-600">
//                 Business Partners
//               </div>
//             </div>
//           </div>

//           <button className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">
//             Partner With Us
//           </button>
//         </div>

//         {/* Right Content - Values */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {values.map((value, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md p-6"
//             >
//               <div className="text-primary-600 text-3xl mb-4">
//                 {value.icon}
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">
//                 {value.title}
//               </h3>
//               <p className="text-sm text-gray-600">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import {
  FaHandshake,
  FaShieldAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "Honest business practices and transparent communication",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety First",
      description: "Uncompromising commitment to safe operations",
    },
    {
      icon: <FaClock />,
      title: "Reliability",
      description: "On-time delivery you can count on",
    },
    {
      icon: <FaUsers />,
      title: "People Focused",
      description: "Treating drivers and customers like family",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              About Us
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
              65+ Years of Trucking Excellence
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Originally founded in 1960, Peter Trucking has grown from a single truck operation
              to one of the Midwest's most trusted freight carriers. Our
              commitment to quality service and driver satisfaction has made us an
              industry leader.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Today, our fleet of 90+ modern trucks serves businesses coast to coast,
              specializing in hopper, dry van, and refrigerated transport. Every
              load is handled with the same care and professionalism that built our
              reputation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-primary-600">10</span>
                  <span className="text-2xl font-bold text-primary-600">M+</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Miles Driven Safely
                </div>
              </div>
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-primary-600">500</span>
                  <span className="text-2xl font-bold text-primary-600">+</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Business Partners
                </div>
              </div>
            </div>

            <a 
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
            >
              Partner With Us
            </a>
          </div>

          {/* Right Content - Image & Values */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={`${process.env.PUBLIC_URL}/img2.jpg`}
                alt="Peter Trucking Operations" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2">
                  {/* <FaTrophy className="text-2xl" /> */}
                  {/* <div>
                    <p className="font-semibold">Industry Leader</p>
                    <p className="text-xs text-gray-200">Since 1995</p>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="text-primary-600 text-2xl mb-3">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {value.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
