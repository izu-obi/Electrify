// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useState,useEffect } from 'react';
import { NavLink,useLocation } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotTop, setIsNotTop] = useState(false);
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === '/');

  useEffect(() => {
    const handleScroll = () => {
      setIsNotTop(window.scrollY > 20);
    };
    setIsHome(location.pathname === '/');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);
  return (
    <>
      <motion.nav
       key="navbar"
       animate={{paddingTop: isNotTop || !isHome ? "0.5rem" : "0.8rem", }}
       transition={{ type: "tween", duration: 0.25, ease: "easeInOut", }}
       className={`navbar w-full ${isHome ? "fixed" : "sticky"} top-0 right-0 left-0 transition-all duration-300 z-30  ${ isHome &&
        isNotTop ? 'text-primary-blue shadow-md backdrop-blur-lg bg-white/30' : !isHome
        ? 'text-primary-blue shadow-md backdrop-blur-lg bg-white/30'
        : 'text-white'
      }`} data-spy="affix" data-offset-top="197">
        <div className="flex justify-between items-center gap-6 sm:py-3 lg:px-30 px-4 py-3">
          <div className="">
            <NavLink className="flex gap-3 md:flex text-base lg:text-xl items-center" to="/">
              <img src="/images/logo.svg" alt="Logo" className="w-[50px] sm:w-60px] md:w-[60px] lg:w-[70px] object-contain" />
              <h2>ELECTRIFY</h2>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-base lg:text-l gap-10">
            <li className="active"><NavLink to="/" className={({ isActive }) =>isActive ? "border-b-2 pb-5 text-primary-blue" : "hover:border-b-2 pb-5 hover:border-[#6e86b1]"}>HOME</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) =>isActive ? "border-b-2 pb-5 text-primary-blue" : "hover:border-b-2 pb-5 hover:border-[#6e86b1]"}>ABOUT</NavLink></li>
            <li><NavLink to="/faq" className={({ isActive }) =>isActive ? "border-b-2 pb-5 text-primary-blue" : "hover:border-b-2 pb-5 hover:border-[#6e86b1]"}>FAQ</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) =>isActive ? "border-b-2 pb-5 text-primary-blue" : "hover:border-b-2 pb-5 hover:border-[#6e86b1]"}>CONTACT</NavLink></li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/30 w-full">
            <ul className="flex flex-col text-base p-4">
              <li className="py-2 border-b"><NavLink to="/" onClick={() => setIsOpen(false)}>HOME</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/service" onClick={() => setIsOpen(false)}>ABOUT</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/project" onClick={() => setIsOpen(false)}>FAQ</NavLink></li>
              <li className="py-2"><NavLink to="/contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink></li>
            </ul>
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;