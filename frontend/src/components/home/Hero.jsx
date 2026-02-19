// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaTruck,
//   FaShippingFast,
//   FaAward,
//   FaArrowRight,
//   FaCheckCircle,
// } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section className="relative pt-24 pb-16 bg-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* Left Content */}
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
//               {/* <span className="text-2xl">🚛</span> */}
//               <span className="text-sm font-semibold text-gray-700">
//                 America's Trusted Hauler Since 1995
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
//               Professional Trucking{" "}
//               <span className="text-primary-600">Coast to Coast</span>
//             </h1>

//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
//               90+ modern trucks delivering hopper, dry van, and refrigerated freight 
//               nationwide with unmatched reliability and safety.
//             </p>

//             {/* Key Points */}
//             <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-3 sm:space-y-0 sm:space-x-6 mb-8">
//               <div className="flex items-center space-x-2 text-gray-700">
//                 <FaCheckCircle className="text-primary-600" />
//                 <span className="text-sm font-medium">DOT Certified</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-700">
//                 <FaCheckCircle className="text-primary-600" />
//                 <span className="text-sm font-medium">24/7 Dispatch</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-700">
//                 <FaCheckCircle className="text-primary-600" />
//                 <span className="text-sm font-medium">Real-time GPS</span>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
//               <Link
//                 to="/careers"
//                 className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
//               >
//                 <span>Join Our Team</span>
//                 <FaArrowRight />
//               </Link>

//               <Link
//                 to="/#contact"
//                 className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all w-full sm:w-auto justify-center"
//               >
//                 <span>Get a Quote</span>
//               </Link>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
//               <div className="text-center lg:text-left">
//                 <div className="text-3xl font-bold text-primary-600">90+</div>
//                 <div className="text-sm text-gray-600 mt-1">Modern Trucks</div>
//               </div>
//               <div className="text-center lg:text-left">
//                 <div className="text-3xl font-bold text-primary-600">25+</div>
//                 <div className="text-sm text-gray-600 mt-1">Years Experience</div>
//               </div>
//               <div className="text-center lg:text-left">
//                 <div className="text-3xl font-bold text-primary-600">99%</div>
//                 <div className="text-sm text-gray-600 mt-1">On-Time Rate</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Hero Image & Feature Cards */}
//           <div className="relative">
//             {/* Main Hero Image */}
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
//               <img 
//                 src={`${process.env.PUBLIC_URL}/img5.jpg`}
//                 alt="Peter Trucking Fleet" 
//                 className="w-full h-[400px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//               <div className="absolute bottom-6 left-6 text-white">
//                 <p className="text-sm font-semibold mb-1">Our Modern Fleet</p>
//                 <p className="text-xs text-gray-200">Ready to serve you nationwide</p>
//               </div>
//             </div>

//             {/* Feature Cards */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
//                 <FaTruck className="text-primary-600 text-2xl mb-3" />
//                 <h3 className="font-semibold text-gray-800 text-sm mb-1">
//                   Modern Fleet
//                 </h3>
//                 <p className="text-xs text-gray-600">
//                   GPS tracking & advanced safety features
//                 </p>
//               </div>

//               <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
//                 <FaShippingFast className="text-primary-600 text-2xl mb-3" />
//                 <h3 className="font-semibold text-gray-800 text-sm mb-1">
//                   Nationwide Coverage
//                 </h3>
//                 <p className="text-xs text-gray-600">
//                   Coast to coast delivery options
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaTruck,
  FaShippingFast,
  FaAward,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={`${process.env.PUBLIC_URL}/img5.jpg`}
          alt="Peter Trucking Fleet" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-white">
                America's Trusted Hauler Since 1960
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Trucking{" "}
              <span className="text-red-500">Coast to Coast</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              90+ modern trucks delivering hopper, dry van, and refrigerated freight 
              nationwide with unmatched reliability and safety.
            </p>

            {/* Key Points */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-3 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-white">
                <FaCheckCircle className="text-red-500" />
                <span className="text-sm font-medium">DOT Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <FaCheckCircle className="text-red-500" />
                <span className="text-sm font-medium">24/7 Dispatch</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <FaCheckCircle className="text-red-500" />
                <span className="text-sm font-medium">Real-time GPS</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Link
                to="/careers"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <span>Join Our Team</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all w-full sm:w-auto justify-center"
              >
                <span>Get a Quote</span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-red-500">90+</div>
                <div className="text-sm text-gray-200 mt-1">Modern Trucks</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-red-500">65+</div>
                <div className="text-sm text-gray-200 mt-1">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-red-500">99%</div>
                <div className="text-sm text-gray-200 mt-1">On-Time Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5 border border-white/20 hover:shadow-lg transition-all hover:bg-white">
                <FaTruck className="text-red-600 text-2xl mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  Modern Fleet
                </h3>
                <p className="text-xs text-gray-600">
                  GPS tracking & advanced safety features
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5 border border-white/20 hover:shadow-lg transition-all hover:bg-white">
                <FaShippingFast className="text-red-600 text-2xl mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  Nationwide Coverage
                </h3>
                <p className="text-xs text-gray-600">
                  Coast to coast delivery options
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5 border border-white/20 hover:shadow-lg transition-all hover:bg-white">
                <FaAward className="text-red-600 text-2xl mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  Safety First
                </h3>
                <p className="text-xs text-gray-600">
                  DOT certified with perfect safety record
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5 border border-white/20 hover:shadow-lg transition-all hover:bg-white">
                <FaCheckCircle className="text-red-600 text-2xl mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  99% On-Time
                </h3>
                <p className="text-xs text-gray-600">
                  Reliable delivery you can count on
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;