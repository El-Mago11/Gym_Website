import React from 'react'
import { assets, colours } from '../assets/assets'
import { motion } from 'framer-motion';

const Classes = () => {
  return (
    <div  className='classes-div ' >
      <div id='Classes'>
      <h1 className='section-heading'>Our Classes</h1>
      <p className='section-text'>
      At Fitness Guru Gym, we offer a wide variety of classes to help you stay motivated, push your limits, and achieve your fitness goals. Whether you're looking to build strength, improve flexibility, or boost your endurance, we’ve got a class for you!      </p>  
      </div>
        <h1 className='section-heading'>Classes we Offer</h1>
        <div className='flex flex-col class-image-container'>
        <br /><br />
           <ul className='class-list flex flex-wrap gap-5 overflow-hidden'>
           <motion.div 
             initial={{opacity:0, y:100}}
             transition={{duration:1}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true, amount:0.3}}
            className='class-list flex flex-wrap gap-5 overflow-hidden'
           >

           <li className=''>
            <img className='classes-image ml-1' src={assets.bodybuilding} alt="" />
                <div className='class-text-div'>
                         <p className='class-title'>BODY BUILDING</p>
                </div>
            </li>

            <li>
            <img className='classes-image' src={assets.fitness} alt="" />
                <div className='class-text-div'>
                         <p className='class-title'>FITNESS</p>
                </div>
            </li>

            <li>
            <img className='classes-image' src={assets.crossfit} alt="" />
                <div className='class-text-div'>
                         <p className='class-title'>CROSS-FIT</p>
                </div>
            </li>
           </motion.div>
         

           <motion.div
           initial={{opacity:0, y:100}}
           transition={{duration:1}}
           whileInView={{opacity:1, y:0}}
           viewport={{once:true, amount:0.3}}
          className='class-list flex flex-wrap gap-5 overflow-hidden'
           >
           <li>
            <img className='classes-image' src={assets.yoga} alt="" />
                <div className='class-text-div'>
                         <p className='class-title'>YOGA</p>
                </div>
            </li>

            <li>
            <img className='classes-image' src={assets.martialArts} alt="" />
                <div className='class-text-div'>
                         <p className='class-title'>MARTIAL ARTS</p>
                </div>
            </li>

            <li>
            <img className='classes-image' src={assets.cardio} alt="" />
                <div className='class-text-div'>
                         <p className='class-title'>CARDIO</p>
                </div>
            </li>
           </motion.div>
           </ul>

            
        </div>
      <div>

      </div>
    </div>
  )
}

export default Classes
