import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='About' className='about-section h-550'>
      <div className='about-section-main'>
        <div>
          <h1 className='section-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
            ABOUT US
          </h1>
          <p className='section-text mt-4 text-lg sm:text-xl text-center'>
            At Fitness Guru, we believe in empowering individuals to lead healthier, more active lives. Whether you're just beginning your fitness journey or you're an experienced athlete, our goal is to help you reach your full potential through personalized training programs, state-of-the-art equipment, and a supportive community.
          </p>
        </div>
        <br /><br />
        
        {/* About Section Container */}
        <div className='about-section-container flex flex-col gap-10 md:gap-16 '>
          
          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, x: -200 }} 
            transition={{ duration: 2 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            className='mission-div flex flex-col md:flex-row-reverse items-center justify-between'>
            
           

            <div className='about-content-text mission-text mt-6 md:mt-0 w-full md:w-1/2 px-4 mr-9'>
              <h2 className='about-content-heading text-2xl font-bold'>Our Mission</h2>
              <p className='about-content-paragraph mt-4'>
                Our mission is to provide a welcoming and motivating environment where you can push yourself beyond your limits, achieve your goals, and become the best version of yourself. We're more than just a gym – we’re a community of fitness enthusiasts committed to growth, strength, and wellbeing.
              </p>
            </div>

            <div className='about-image-div w-full md:w-1/2 ml-9'>
              <img src={assets.mission} className='about-content-image w-full' alt="Our Mission" />
            </div>

          </motion.div>

          {/* Offer Section */}
          <motion.div 
            initial={{ opacity: 0, x: 200 }} 
            transition={{ duration: 2 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            className='offer-div flex flex-col md:flex-row-reverse items-center justify-between'>
            
            <div className='w-full md:w-1/2'>
              <img src={assets.offer} className='about-content-image w-full' alt="What We Offer" />
            </div>

            <div className='about-content-text offer-text mt-6 md:mt-0 w-full md:w-1/2 px-4  ml-9'>
              <h2 className='about-content-heading text-2xl font-bold'>What We Offer</h2>
              <p className='about-content-paragraph mt-4'>
                <p><span className='font-bold'>Personal Training:</span> Tailored fitness plans that match your goals, lifestyle, and needs.</p>
                <p className='mt-2'><span className='font-bold'>Group Classes:</span> High-energy classes that push you to work hard and have fun.</p> 
                <p className='mt-2'><span className='font-bold'>Advanced Equipment:</span> Access to top-of-the-line machines and weights for a full-body workout.</p> 
                <p className='mt-2'><span className='font-bold'>Wellness Support:</span> Nutritional guidance, recovery tools, and mental wellness tips to keep you on track.</p>
              </p>
            </div>

          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div 
            initial={{ opacity: 0, x: -200 }} 
            transition={{ duration: 2 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            className='why-div flex flex-col md:flex-row-reverse items-center justify-between'>
            
            

            <div className='about-content-text why-text mt-6 md:mt-0 w-full md:w-1/2 px-4  mr-9'>
              <h2 className='about-content-heading text-2xl font-bold'>Why Choose Us?</h2>
              <p className='about-content-paragraph mt-4'>
                <p><span className='font-bold'>Expert Trainers:</span> Our certified trainers have years of experience in various disciplines, ready to guide you.</p>
                <p className='mt-2'><span className='font-bold'>Friendly Community:</span> We believe in fostering a positive and inclusive atmosphere for all.</p>
                <p className='mt-2'><span className='font-bold'>Results-Oriented:</span> Our programs are designed to get you the results you want, whether it's losing weight, building muscle, or improving athletic performance.</p>
                <p className='mt-2'>Join us today and be part of a fitness journey that will change your life.</p>
              </p>
            </div>

            <div className='w-full md:w-1/2 ml-9'>
              <img src={assets.why} className='about-content-image w-full why-image' alt="Why Choose Us" />
            </div>

          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
