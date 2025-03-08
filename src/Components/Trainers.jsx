import React from 'react'
import { assets } from '../assets/assets'
import { faFacebook, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


const Trainers = () => {
  return (
    <div id='Trainers' className='trainers-section  bg-purple-400 mt-20'>
      <div>
      <div>
        <h1 className='section-heading'>Our Trainers</h1>
        <p className='section-text'>
        At Fitness Guru, we are proud to have a team of passionate and experienced fitness professionals dedicated to helping you achieve your health and fitness goals. Our trainers are not only certified but also committed to providing personalized coaching in a supportive and motivating environment.</p>  
        </div>
        <ul className='flex flex-wrap gap-3.5 justify-center '>
            <motion.div 
            initial={{ opacity: 0, x: 200 }} 
            transition={{ duration: 3 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            className='flex'>
                 <div className='flex triplet-trainer'>
                 <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.bodybuildingTrainer} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Shaka Zulu</h2>
                        <p className='trainer-type'>Bodybuiliding Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                             <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className=' mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className=' mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className=' mt-3 trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.fitnessTrainer} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Sub Zero</h2>
                        <p className='trainer-type'>Fitness Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.crossfitTrainer} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Mandy Rose</h2>
                        <p className='trainer-type'>CrossFit Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                    </div>
                </div>         
            </li>
                 </div>
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, x: -200 }} 
             transition={{ duration: 3 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ once: true, amount: 0.3 }} 
             className='flex '
            >
               <div className='flex triplet-trainer'>
               <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.yogaTrainer} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Jane Foster</h2>
                        <p className='trainer-type'>Yoga Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.martialArtsTrainer} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Ronda Rousey</h2>
                        <p className='trainer-type'>Martial Arts Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.cardioTrainer} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Bruce Wayne</h2>
                        <p className='trainer-type'>Cardio Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </li>

               </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 200 }} 
                transition={{ duration: 3 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.3 }} 
                className='flex'
            >
               <div className='flex triplet-trainer'>
               <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.personalTrainer1} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Dwanye Newman</h2>
                        <p className='trainer-type'>Personal Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.personalTrainer2} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Natasha</h2>
                        <p className='trainer-type'>Personal Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className='trainer-details'>
                    <img className='trainer-image ' src={assets.personalTrainer3} alt="" />
                    <div className='trainer-image-description bg-gray-200 '>
                        <h2 className='trainer-name font-bold'>Alkaline</h2>
                        <p className='trainer-type'>Bodybuiliding Trainer</p>
                        <div className='border-t border-gray-400 flex flex-row gap-5 justify-center mt-3 '>
                        <FontAwesomeIcon 
                                       icon={faFacebook}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faPhone}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>                                        
                                       
                                        <FontAwesomeIcon 
                                       icon={faInstagram}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>
                                       <FontAwesomeIcon 
                                       icon={faTwitter}
                                       className='  mt-3  trainer-links'
                                       >
                                           
                                       </FontAwesomeIcon>

                        </div>
                    </div>
                </div>
            </li>
               </div>
            </motion.div>
        </ul>
      </div>
    </div>
  )
}

export default Trainers