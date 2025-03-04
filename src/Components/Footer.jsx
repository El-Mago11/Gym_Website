import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { assets } from '../assets/assets';


const Footer = () => {
  return (
    <div className='footer-section relative bottom-140'>
      <div className='flex flex-row gap-15'>
      <div className='ml-8'>
    <h3 className='font-medium text-2xl mt-10'>About Us</h3>
    <ul>
        <li className='mt-4'>Ayeduase, Kumasi</li>
        <li className='mt-2'>Monday - Saturday: 6:00AM to 8:30 PM</li>
        <li className='mt-2'>Sunday: 2:00PM to 8:30 PM</li>
    </ul>
   </div>

   <div>
  <ul className='ml-8 mt-10'>
    <h3 className='font-medium text-2xl'>Nav Links</h3>
    <li className='li-style nav-links'>
        <a href="Home">Home</a>
    </li>
    <li className='li-style nav-links'>
        <a href="About">About</a>
    </li>
    <li className='li-style nav-links'>
        <a href="Classes">Classes</a>
    </li>
    <li className='li-style nav-links'>
        <a href="Class Schedule">Class Schedule</a>
    </li>
    <li className='li-style nav-links'>
        <a href="Trainers">Trainers</a>
    </li>
    <li className='li-style nav-links'>
        <a href="Events">Events</a>
    </li>
    <li className='li-style nav-links'>
        <a href="Pricing">Pricing</a>
    </li>
    <li className='li-style nav-links'>
        <a href="Testimonials">Testimonials</a>
    </li>
    <li className='li-style nav-links'>
        <a href="Contact">Contact</a>
    </li>
   
   </ul>
  </div>

  <div className='ml-8'>
    <h3 className='font-medium text-2xl mt-10'>Our Social Media</h3>
    <ul className='flex flex-wrap'>
        <li> 
            <img src={assets.fb} width={50} alt="" />
              </li>
              <li> 
            <img src={assets.ig} width={50} alt="" />
              </li>
              
              <li> 
            <img src={assets.x} width={50} alt="" />
              </li>
              <li> 
            <img src={assets.call} width={50} alt="" />
              </li>
    </ul>
   </div>
       <div className='ml-6'>
       <h3 className='font-medium text-2xl mt-10'>Subscribe to our Newsletter</h3>
<input type="email" className='border rounded h-10  px-4 mt-2 py-3'/>   
<span><button className='btns ml-3'>
    Subscribe</button></span> 
       </div>

  
   
  </div>
    </div>
  )
}

export default Footer
