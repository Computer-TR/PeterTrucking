// import React from "react";
// import {
//   FaBox,
//   FaSnowflake,
//   FaWarehouse,
//   FaCheckCircle,
// } from "react-icons/fa";

// const Services = () => {
//   const services = [
//     {
//       icon: <FaWarehouse />,
//       title: "Hopper Hauling",
//       description:
//         "Specialized bulk material transport including grain, sand, aggregates, and more.",
//       features: [
//         "Pneumatic & gravity discharge",
//         "Food-grade certified trailers",
//         "Weight monitoring systems",
//         "Cross-contamination prevention",
//       ],
//       gradient: "from-red-50 to-orange-50",
//     },
//     {
//       icon: <FaBox />,
//       title: "Dry Van Transport",
//       description:
//         "Secure enclosed shipping for general freight and palletized goods nationwide.",
//       features: [
//         "53ft temperature-stable trailers",
//         "Multi-stop capability",
//         "Liftgate available",
//         "Real-time tracking",
//       ],
//       gradient: "from-red-50 to-pink-50",
//     },
//     {
//       icon: <FaSnowflake />,
//       title: "Refrigerated (Reefer)",
//       description:
//         "Temperature-controlled transport maintaining -20°F to 70°F for sensitive cargo.",
//       features: [
//         "Multi-temp zones",
//         "Continuous monitoring",
//         "Pharmaceutical certified",
//         "Backup power systems",
//       ],
//       gradient: "from-blue-50 to-red-50",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-sm font-semibold text-primary-600">
//             WHAT WE DO
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
//             Our Services
//           </h2>
//           <p className="text-gray-600 mt-4">
//             Comprehensive trucking solutions tailored to your specific freight
//             needs
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`rounded-xl p-6 bg-gradient-to-br ${service.gradient} shadow-md`}
//             >
//               <div className="text-primary-600 text-3xl mb-4">
//                 {service.icon}
//               </div>

//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {service.title}
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 {service.description}
//               </p>

//               <ul className="space-y-2 mb-6">
//                 {service.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
//                     <FaCheckCircle className="text-primary-600" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition">
//                 Request Quote →
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* CTA Banner */}
//         <div className="mt-20 bg-primary-600 text-white rounded-xl p-10 text-center">
//           <h3 className="text-2xl font-bold mb-2">
//             Need Custom Freight Solutions?
//           </h3>
//           <p className="mb-6 text-primary-100">
//             Our logistics experts are ready to design a transportation plan for
//             your unique needs.
//           </p>
//           <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-100 transition">
//             Contact Us Today
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Services = () => {
  
  const services = [
    {
      // icon: <FaWarehouse />,
      title: "Hopper Hauling",
      description:
        "Specialized bulk material transport including grain, sand, aggregates, and more.",
      features: [
        "Gravity discharge",
        "Food-grade certified trailers",
        "Weight monitoring systems",
        "Cross-contamination prevention",
      ],
      image: "img14.jpg",
    },
    {
      // icon: <FaBox />,
      title: "Dry Van Transport",
      description:
        "Secure enclosed shipping for general freight and palletized goods nationwide.",
      features: [
        "53ft temperature-stable trailers",
        "Multi-stop capability",
        "Real-time tracking",
      ],
      image: "img8.jpg",
    },
    {
      // icon: <FaSnowflake />,
      title: "Refrigerated (Reefer)",
      description:
        "Temperature-controlled transport maintaining -20°F to 70°F for sensitive cargo.",
      features: [
        "Real-time tracking",
        "Continuous monitoring",
      ],
      image: "img11.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
            What We Do
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive trucking solutions tailored to your specific freight needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`${process.env.PUBLIC_URL}/${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl mb-2">{service.icon}</div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center space-x-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group">
                  {/* <span>Request Quote</span> */}
                  {/* <FaArrowRight className="group-hover:translate-x-1 transition-transform" /> */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-primary-600 text-white rounded-2xl p-10 text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-3">
            Need Custom Freight Solutions?
          </h3>
          <p className="text-lg mb-8 text-red-100 max-w-2xl mx-auto">
            Our logistics experts are ready to design a transportation plan for your unique needs.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
