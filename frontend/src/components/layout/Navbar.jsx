// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/#services" },
//     { name: "About", path: "/#about" },
//     { name: "Fleet", path: "/#fleet" },
//     { name: "Contact", path: "/#contact" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? "bg-white shadow-md py-3" 
//           : "bg-white py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <img 
//               src={`${process.env.PUBLIC_URL}/logo.png`}
//               alt="Peter Trucking" 
//               className="h-12 w-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`text-sm font-medium transition-colors relative group ${
//                   isActive(link.path)
//                     ? "text-primary-600"
//                     : "text-gray-700 hover:text-primary-600"
//                 }`}
//               >
//                 {link.name}
//                 <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-300 ${
//                   isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//                 }`}></span>
//               </Link>
//             ))}
//           </div>

//           {/* Right Side - Phone & CTA */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <a 
//               href="tel:1-715-257-7121"
//               className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
//             >
//               <FaPhone className="text-primary-600" />
//               <span className="text-sm font-semibold">1-715-257-7121</span>
//             </a>

//             <Link
//               to="/careers"
//               className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-sm hover:shadow-md"
//             >
//               Join Our Team
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-gray-700 text-2xl focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t shadow-lg">
//           <div className="px-4 py-6 space-y-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`block text-base font-medium py-2 ${
//                   isActive(link.path)
//                     ? "text-primary-600"
//                     : "text-gray-700"
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <a 
//               href="tel:1-715-257-7121"
//               className="flex items-center space-x-2 text-gray-700 py-2"
//             >
//               <FaPhone className="text-primary-600" />
//               <span className="text-sm font-semibold">1-715-257-7121</span>
//             </a>

//             <Link
//               to="/careers"
//               className="block text-center px-5 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all"
//               onClick={() => setIsOpen(false)}
//             >
//               Join Our Team
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
    { name: "Fleet", path: "/#fleet" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);

    if (path === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path.startsWith("/#")) {
      const sectionId = path.substring(2);
      
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    return location.hash === path.substring(1);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <Link 
            to="/" 
            className="flex items-center"
            onClick={(e) => handleNavClick(e, "/")}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Peter Trucking" 
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-medium transition-colors relative group cursor-pointer ${
                  isActive(link.path)
                    ? "text-primary-600"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-300 ${
                  isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:1-715-257-7121"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <FaPhone className="text-primary-600" />
              <span className="text-sm font-semibold">1-715-257-7121</span>
            </a>

            <Link
              to="/careers"
              className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-sm hover:shadow-md"
            >
              Join Our Team
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`block text-base font-medium py-2 cursor-pointer ${
                  isActive(link.path)
                    ? "text-primary-600"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a 
              href="tel:1-715-257-7121"
              className="flex items-center space-x-2 text-gray-700 py-2"
            >
              <FaPhone className="text-primary-600" />
              <span className="text-sm font-semibold">1-715-257-7121</span>
            </a>

            <Link
              to="/careers"
              className="block text-center px-5 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Join Our Team
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;