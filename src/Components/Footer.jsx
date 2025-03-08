import React from 'react'
import { faFacebook, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className='footer-section relative bottom-100 h-auto sm:h-90 py-10'>
      <div className='flex flex-col sm:flex-row gap-20 px-4'>
        {/* Logo Section */}
        <div className='mt-10 ml-10 flex justify-center sm:justify-start'>
          <img src={assets.logo} className="w-28 sm:w-36 md:w-48" alt="logo" />
        </div>
        
        {/* Company Links Section */}
        <div className='sm:w-1/3'>
          <h3 className='text-center sm:text-left font-bold mt-10 text-2xl'>Company</h3>
          <div className='flex flex-col sm:flex-row sm:gap-5 mt-4'>
            <div className='sm:w-1/2'>
              <ul className='mt-2'>
                <li className='nav-links'>
                  <a href="#Home">Home</a>
                </li>
                <li className='nav-links'>
                  <a href="#About">About</a>
                </li>
                <li className='nav-links'>
                  <a href="#Classes">Classes</a>
                </li>
                <li className='nav-links'>
                  <a href="#Class Schedule">Class Schedule</a>
                </li>
                <li className='nav-links'>
                  <a href="#Trainers">Trainers</a>
                </li>
              </ul>
            </div>

            <div className='sm:w-1/2'>
              <ul className='mt-2'>
                <li className='nav-links'>
                  <a href="#Events">Events</a>
                </li>
                <li className='nav-links'>
                  <a href="#Pricing">Pricing</a>
                </li>
                <li className='nav-links'>
                  <a href="#Testimonials">Testimonials</a>
                </li>
                <li className='nav-links'>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Social Media Links Section */}
        <div className='gap-6 mt-10'>
          <h3 className='text-center sm:text-left font-bold text-2xl'>Follow Us</h3>
          <ul className='flex justify-center sm:justify-start gap-6 mt-7'>
            <li>
              <FontAwesomeIcon
                icon={faFacebook}
                className='nav-links footer-images'
                size='3x'
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className='nav-links footer-images'
                size='3x'
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                className='nav-links footer-images'
                size='3x'
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSnapchat}
                className='nav-links footer-images'
                size='3x'
              />
            </li>
          </ul>
        </div>
        
        {/* Subscribe Section */}
        <div className='w-full md:w-1/3 mt-10 ml-10 sm:ml-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-xs sm:max-w-full'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className='flex flex-col sm:flex-row gap-2'>
            <input
              type="email"
              placeholder='Enter your email'
              className='p-2 newsletter-input rounded bg-white text-gray-400 border border-gray-700 focus:outline-none w-full sm:w-auto'
            />
            <button className='newsletter-input py-2 px-4 rounded btns'>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className='border-t divider w-290 mx-auto mt-9'></div> {/* Border adjusted to not be full width */}

      {/* Copyright Section */}
      <div className='text-center mt-5'>
        <p className='text-gray-400 copyright-text'>COPYRIGHT @ 2025 - DESIGNED AND DEVELOPED BY EL MAGO</p>
      </div>
    </div>
  )
}

export default Footer;
