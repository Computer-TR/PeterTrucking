// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaTruck,
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//         {/* Company Info */}
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <FaTruck className="text-primary-500 text-3xl" />
//             <div>
//               <h3 className="text-xl font-bold text-white">Peter Trucking</h3>
//               <span className="text-sm text-gray-400">Since 1995</span>
//             </div>
//           </div>

//           <p className="text-sm mb-6">
//             America’s trusted freight carrier specializing in hopper, dry van,
//             and refrigerated hauling coast to coast.
//           </p>

//           <div className="flex gap-4 text-xl">
//             <a href="#" aria-label="Facebook" className="hover:text-white">
//               <FaFacebook />
//             </a>
//             <a href="#" aria-label="Twitter" className="hover:text-white">
//               <FaTwitter />
//             </a>
//             <a href="#" aria-label="LinkedIn" className="hover:text-white">
//               <FaLinkedin />
//             </a>
//             <a href="#" aria-label="Instagram" className="hover:text-white">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/" className="hover:text-white">Home</Link></li>
//             <li><Link to="/#services" className="hover:text-white">Services</Link></li>
//             <li><Link to="/#about" className="hover:text-white">About Us</Link></li>
//             <li><Link to="/#fleet" className="hover:text-white">Our Fleet</Link></li>
//             <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
//             <li><Link to="/#contact" className="hover:text-white">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Our Services</h4>
//           <ul className="space-y-2 text-sm">
//             <li>Hopper Hauling</li>
//             <li>Dry Van Transport</li>
//             <li>Refrigerated Freight</li>
//             <li>Long Haul Shipping</li>
//             <li>Regional Delivery</li>
//             <li>Expedited Service</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Contact Info</h4>
//           <ul className="space-y-4 text-sm">
//             <li className="flex items-start gap-3">
//               <FaPhone className="text-primary-500 mt-1" />
//               <span>1-715-257-7121</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <FaEnvelope className="text-primary-500 mt-1" />
//               <span>tom@thepetercompanies.com</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-primary-500 mt-1" />
//               <span>
//                 118576 Co Rd A, <br />
//                 Athens, WI 54411
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
//           <span>© {currentYear} Peter Trucking. All rights reserved.</span>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//             <a href="#" className="hover:text-white">Terms of Service</a>
//             <a href="#" className="hover:text-white">Safety</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300">  
   {/* bg-gray-900  */}
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={`${process.env.PUBLIC_URL}/logo-bg.png`}
                alt="Peter Trucking" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>

            <p className="text-sm mb-6 text-gray-400 leading-relaxed">
              America's trusted freight carrier specializing in hopper, dry van,
              and refrigerated hauling coast to coast since 1995.
            </p>

            <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/PeterTruckingLLC/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
            >
              <FaFacebook className="text-lg" />
            </a>
          </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#fleet" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors">Hopper Hauling</li>
              <li className="hover:text-white transition-colors">Dry Van Transport</li>
              <li className="hover:text-white transition-colors">Refrigerated Freight</li>
              <li className="hover:text-white transition-colors">Long Haul Shipping</li>
              <li className="hover:text-white transition-colors">Regional Delivery</li>
              <li className="hover:text-white transition-colors">Expedited Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="tel:1-715-257-7121"
                  className="flex items-start space-x-3 hover:text-white transition-colors group"
                >
                  <FaPhone className="text-primary-600 mt-1 group-hover:text-white transition-colors" />
                  <span>1-715-257-7121</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:tom@thepetercompanies.com"
                  className="flex items-start space-x-3 hover:text-white transition-colors group"
                >
                  <FaEnvelope className="text-primary-600 mt-1 group-hover:text-white transition-colors" />
                  <span>tom@thepetercompanies.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=118576+County+Highway+A+Athens+WI+54411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 hover:text-white transition-colors group"
                >
                  <FaMapMarkerAlt className="text-primary-600 mt-1 group-hover:text-white transition-colors flex-shrink-0" />
                  <span>
                    118576 County Highway A<br />
                    Athens, WI 54411
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            <span className="text-gray-400">
              © {currentYear} Peter Trucking. All rights reserved.
            </span>
            <div className="flex space-x-6">
              <a href="#top" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#top" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#top" className="text-gray-400 hover:text-white transition-colors">
                Safety
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
