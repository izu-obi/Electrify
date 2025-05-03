import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-8 md:px-28">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Logo and Copyright - Centered on mobile */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start space-y-6">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80">
            <img 
              src="../images/logo.svg" 
              alt="Electrify Logo" 
              className="h-8"
              loading="lazy"
            />
            <span className="text-lg font-semibold">ELECTRIFY</span>
          </Link>

          <p className="text-sm text-gray-400 text-center md:text-left">© {year}. All Rights Reserved</p>

          {/* Social Media - Centered on mobile */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start items-center gap-6 text-gray-400">
              <a href="#" aria-label="Instagram" className="hover:text-white text-2xl">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white text-2xl">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Company Links - Centered on mobile */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-semibold text-white">Company</h4>
          <div className="flex flex-col text-sm text-gray-400 space-y-2 text-center md:text-left">
            <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
            <Link to="/about" className="hover:text-white transition">About Us</Link>
          </div>
        </div>

        {/* Policies - Centered on mobile */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-400">
            <Link to="/privacypolicy" className="hover:text-white transition">Privacy Policy</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/termsofservice" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;