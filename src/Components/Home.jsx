import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { assets } from '../assets/assets';


const Home = () => {
  return (
    <div id='Home' className='home-section'>
           <Carousel className='carousel'





            showThumbs={false} 
            showStatus={false}
            showIndicators={true}
            onClickItem={true}
            autoPlay={true}
            infiniteLoop={true} 
            interval={3000}>
        <div className='slider-div'>
        <img className='slider-images' src={assets.image1} alt="First Slide" />

            <h1 className='slider-heading heading1'>Unleash   <span className='slider-span'>YOUR</span> POTENTIAL</h1>
            <p className='slider-text text1'> Transform your body, mind, and spirit. Start your fitness <br />
                                              journey with personalized workouts,expert guidance, and a  <br />
                                              community that motivates you every step of the way.
          </p>
          <div className='btns1'>
            <button className='btns'><a href="#Contact">Contact Us</a>
            </button>
            <button className='btns gap-2'><a href="#Contact">Register Now</a>
            </button>


          </div>
        </div>
        <div className=''>
        <img className='slider-images' src={assets.image2} alt="Second Slide" />
        
            <h1 className='slider-heading heading2'>ACHIEVE <span className='slider-span'>YOUR</span> GOALS FASTER </h1>
            <p className='slider-text text2'>  Whether you're a beginner or an athlete, we’ve got everything  <br />
                                                you need to level up. From cutting-edge equipment to dynamic <br />
                                                classes, it’s time to push your limits. 
          </p>
          <div className='btns2 '>
            <button className='btns'><a href="#Contact">Contact Us</a>
            </button>
            <button className='btns gap-2'><a href="#Contact">Register Now</a>
            </button>


          </div>
         
        </div>
        <div className=''>
        <img className='slider-images' src={assets.image3} alt="Third Slide" />

        
            <h1 className='slider-heading heading3'>STRONGER <span className='slider-span'>EVERY </span> SINGLE DAY</h1>
            <p className='slider-text text3'>  Join us today and feel the difference. Build strength, endurance, <br />
                                               and confidence in an environment where you can thrive and  <br />
                                               reach your peak performance.


          </p>
          <div className='btns3'>
            <button className='btns'><a href="#Contact">Contact Us</a>
            </button>
            <button className='btns gap-2'><a href="#Contact">Register Now</a>
            </button>


          </div>
        </div>
      </Carousel>

    </div>
  )
}

export default Home