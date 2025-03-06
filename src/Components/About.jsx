import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div id='About' className='about-section'>
      <div className='about-section-main'>
        <div >
        
          <h1 className='section-heading'>ABOUT US</h1>
           <p className='section-text'>
          At FitZone Gym, we believe in empowering individuals to lead healthier, more active lives. Whether you're just beginning your fitness journey or you're an experienced athlete, our goal is to help you reach your full potential through personalized training programs, state-of-the-art equipment, and a supportive community.
          </p>      
         </div>
         <br /><br />
           <div className='about-section-container'>
            <div className='mission-div'>
              <div>
              < img src={assets.mission} className='about-content-image' alt="Our Mission" />
              </div>

              <div className='about-content-text mission-text'>
              <h2 className='about-content-heading font-bold'>Our Mission</h2>
              <p className='about-content-paragraph'>
             Our mission is to provide a welcoming and motivating environment where you can push yourself beyond your limits, achieve your goals, and become the best version of yourself. We're more than just a gym – we’re a community of fitness enthusiasts committed to growth, strength, and wellbeing.
               </p>
              </div>
           
          </div>

         <div className='offer-div'>
           <img src={assets.offer} className='about-content-image offer-image' alt="Our Mission" />          
           
      </div>
      <div className='about-content-text offer-text '>
            <h2 className='about-content-heading font-bold offer-h'>What We Offer
            </h2>
            <p className='about-content-paragraph'>
                <p> <span className='font-bold'>Personal Training:</span>  Tailored fitness plans that match your goals, lifestyle, and needs. </p>
                <p className=' mt-2'><span className='font-bold'>Group Classes:</span>  High-energy classes that push you to work hard and have fun.</p> 
                <p className=' mt-2'><span className='font-bold'>Advanced Equipment:</span>  Access to top-of-the-line machines and weights for a full-body workout.</p> 
                <p className=' mt-2'><span className='font-bold'>Wellness Support:</span>  Nutritional guidance, recovery tools, and mental wellness tips to keep you on track.</p>

            </p>
          </div>

      <div className='why-div'>
        <img src={assets.why} className='about-content-image why-image' alt="Our Mission" />
          <div className='about-content-text why-text'>
            <h2 className='about-content-heading font-bold'>Why Choose Us? </h2>
         <p className='about-content-paragraph'>
            <p> <span className='font-bold' >Expert Trainers:</span>  Our certified trainers have years of experience in various disciplines, ready to guide you.</p>
            <p className=' mt-2'> <span className='font-bold' >Friendly Community:</span>  We believe in fostering a positive and inclusive atmosphere for all.</p>
            <p className=' mt-2'> <span className='font-bold' >Results-Oriented: </span> Our programs are designed to get you the results you want, whether it's losing weight, building muscle, or improving athletic performance. </p>
            <p className=' mt-2'> <span className='font-bold' ></span> Join us today and be part of a fitness journey that will change your life.  </p> 
         </p>
          </div>
      </div>
      
           
      </div>
      </div>
    </div>
    
  )
}

export default About
