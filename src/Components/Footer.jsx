import React from 'react'
import { faFacebook, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className='footer-section relative bottom-100 h-90'>
      <div className='flex flex-row gap-20'>
    
<div className='mt-10 ml-10'>
  <img src={assets.logo} width={120} alt="" />
</div>
<div>
  <h3 className='text-center font-bold mt-10 text-2xl'>Company</h3>
  <div className='flex gap-5'>
    <div className=''>
      <ul className='mt-2 '>
        <li className='nav-links'>
          <a href="#Home">Home</a>
        </li>
        <li  className='nav-links'>
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

    <div>
      <ul className='mt-2 '>
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
<div className='gap-6 mt-10'>

      <h3 className='text-center font-bold text-2xl' >Follow Us</h3>
      <ul className='flex gap-6 mt-7'>
        <li className=''>
           <FontAwesomeIcon 
           icon={faFacebook}
           className='nav-links footer-images'
           size='5x'
           
           >
               
           </FontAwesomeIcon>
        </li>
        <li>
           <FontAwesomeIcon 
           icon={faInstagram}
           className='nav-links footer-images'
           >
               
           </FontAwesomeIcon>
        </li>
        <li>
           <FontAwesomeIcon 
           icon={faTwitter}
           className='nav-links footer-images'
           >
               
           </FontAwesomeIcon>

        </li>
        <li>
           <FontAwesomeIcon 
           icon={faSnapchat}
           className='nav-links footer-images'
           >
               
           </FontAwesomeIcon>
           
        </li>
      </ul>
    </div>


  
   <div className='w-full md:w-1/3 mt-10 ml-10' >
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent
            to your inbox weekly.
          </p>

          <div className='flex gap-2'>
            <input type="email" placeholder='Enter your email' className='p-2 rounded bg-white text-gray-400 border border-gray-700
            focus:outline-none w-full md:w-auto' />
            <button className='py-2 px-4 rounded btns'>Subscribe</button>
          </div>
   </div>
  </div>
  <div className='border-1 w-270 mt-9 ml-20'>
  </div>
  <div className='text-center mt-5 m '>
    <p className=''>COPYRIGHT @ 2024 - DESIGNED AND DEVELOPED BY EL MAGO</p>
  </div>
    </div>
  )
}

export default Footer
