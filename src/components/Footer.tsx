import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-6">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Machine learning is a branch of artificial intelligence that
              enables computers to learn from data without being explicitly
              programmed. It involves algorithms that improve automatically
              through experience. Supervised, unsupervised, and reinforcement
              learning are the main types. Python is one of the most widely used
              languages in this field.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  {' '}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  {' '}
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  {' '}
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <p className="hover:text-white transition-colors duration-300">
              New Delhi, India
            </p>
            <p className="hover:text-white transition-colors duration-300">
              Delhi: 10001
            </p>
            <p className="hover:text-white transition-colors duration-300">
              Email: info@machineLearner_intro.com
            </p>
            <p className="hover:text-white transition-colors duration-300">
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <p className="text-center text-xs pt-3">
          &#169; 2024 Machine Learning. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
