import React from 'react';
import { FaTwitter, FaLinkedinIn, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://x.com/MubiruM05953701"
              aria-label="Twitter Profile"
              className="text-white hover:text-pink-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/dr-moses-batanda-mubiru-phd-mciarb-rsu-fisu-6b659425//"
              aria-label="LinkedIn Profile"
              className="text-white hover:text-pink-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={28} />
            </a>
            <a
              href="mailto:mmubiru@kyu.ac.ug"
              aria-label="Dr Moses Mubiru Batands"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="https://www.youtube.com/@MosesBMubiru-l8l" // Replace with actual YouTube link
              aria-label="YouTube Channel"
              className="text-white hover:text-pink-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={28} />
            </a>
          </div>
          {/* Email Address */}
          <p className="text-lg md:text-xl text-gray-300 mb-6">mormoses06@gmail.com</p>
          {/* Footer Text */}
          <p className="text-gray-500 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;