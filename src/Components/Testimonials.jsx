import React from 'react'
import { assets } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <div className='testimonial-section relative bottom-140' id='Testimonials'>
      <div>
        <h1 className='section-heading text-center text-3xl sm:text-4xl md:text-5xl'>Testimonials</h1>
        <div className='slider-container'>
          <div className='slider-wrapper'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={1} // Default to 1 slide per view on mobile
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2, // 2 slides per view on small screens
                },
                768: {
                  slidesPerView: 3, // 3 slides per view on larger screens
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <li className='testimonial'>
                  <img src={assets.testimonial1} alt="" className='testimonial-image' />
                  <h3 className='name'> John D.</h3>
                  <span>⭐⭐⭐⭐⭐</span>
                  <i className="feedback">
                    "I’ve been working out at this gym for 6 months now, and the results have 
                    been amazing! The trainers are so knowledgeable, and the community here is
                    so motivating. I’ve lost 20 pounds and gained so much confidence. 
                    Highly recommend!"
                  </i>
                </li>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <li className='testimonial'>
                  <img src={assets.testimonial2} alt="" className='testimonial-image' />
                  <h3 className='name'> Sarah L.</h3>
                  <span>⭐⭐⭐⭐⭐</span>
                  <i className="feedback">
                    "This gym has truly transformed my fitness journey. The classes are engaging, 
                    the equipment is top-notch, and the staff is always friendly. I feel stronger 
                    than ever before!"
                  </i>
                </li>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <li className='testimonial'>
                  <img src={assets.testimonial3} alt="" className='testimonial-image' />
                  <h3 className='name'> Mike R.</h3>
                  <span>⭐⭐⭐⭐⭐</span>
                  <i className="feedback">
                    "From the first day I walked in, I felt welcome. The trainers create personalized 
                    workout plans, and I’ve seen noticeable improvements in my strength and endurance. 
                    I look forward to my sessions every week!"
                  </i>
                </li>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <li className='testimonial'>
                  <img src={assets.testimonial4} alt="" className='testimonial-image' />
                  <h3 className='name'> Emily W.</h3>
                  <span>⭐⭐⭐⭐⭐</span>
                  <i className="feedback">
                    "What I love most about this gym is the variety of workouts available. From strength 
                    training to yoga, there's something for everyone. I’ve found a routine that works for me, 
                    and I’m finally seeing the results I’ve been working toward!"
                  </i>
                </li>
              </SwiperSlide>

              {/* Slide 5 */}
              <SwiperSlide>
                <li className='testimonial'>
                  <img src={assets.testimonial5} alt="" className='testimonial-image' />
                  <h3 className='name'> Mark H</h3>
                  <span>⭐⭐⭐⭐⭐</span>
                  <i className="feedback">
                    "I was skeptical about joining a gym, but after seeing the positive changes in myself 
                    and others, I’m so glad I did. The supportive staff and friendly atmosphere make this place 
                    so special."
                  </i>
                </li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
