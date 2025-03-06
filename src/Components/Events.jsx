import React from 'react'
import { assets } from '../assets/assets'

const Events = () => {
  return (
    <div id='Events' className='bg-black text-white relative bottom-138 '>
       <div className=''>
        <h1 className='section-heading event-h1'>Upcoming Events</h1>
        <p className='section-text'>
        Stay active, stay motivated! At [Gym Name], we love bringing the community together 
        through fun and engaging fitness events. Whether you're a seasoned athlete or just 
        starting your fitness journey, our events offer something for everyone. Check out our 
        upcoming events and be sure to join us!</p>  
        </div>
        <div className='flex border-b-1 h-55 events-list '>
            <div className=''>
                <img className='w-70 pl-5 mb-5 event-image' src={assets.healthwalk1} alt="" />
                  <div className='relative bottom-30 left-60 ml-20 event-text'>
                  <span className='text-5xl relative top-6 ml'>08</span> <span className='font-light italic pl-2'>Sat <br />
                   <span className='font-medium pl-15 normal'> Mar</span> </span>
                  </div>
            </div>
            <h2 className='relative top-23 left-50 font-bold text-4xl event-detail-text'>Health Walk <span className='text-2xl font-light span-text'> /Ayeduase</span></h2>
            <button className='btns h-12 w-19 relative top-23 left-100 event-detail-text event-btn'>Details</button>
        </div>

        <div className='flex border-b-1 h-55 events-list '>
            <div className=''>
                <img className='w-70 pl-5 mb-5 event-image' src={assets.healthwalk1} alt="" />
                  <div className='relative bottom-30 left-60 ml-20 event-text'>
                  <span className='text-5xl relative top-6 ml'>08</span> <span className='font-light italic pl-2'>Sat <br />
                   <span className='font-medium pl-15 normal'> Mar</span> </span>
                  </div>
            </div>
            <h2 className='relative top-23 left-50 font-bold text-4xl event-detail-text'>Health Walk <span className='text-2xl font-light span-text'> /Ayeduase</span></h2>
            <button className='btns h-12 w-19 relative top-23 left-100 event-detail-text event-btn'>Details</button>

        </div>

        <div className='flex border-b-1 h-55 events-list '>
            <div className=''>
                <img className='w-70 pl-5 mb-5 event-image' src={assets.healthwalk1} alt="" />
                  <div className='relative bottom-30 left-60 ml-20 event-text'>
                  <span className='text-5xl relative top-6 ml'>08</span> <span className='font-light italic pl-2'>Sat <br />
                   <span className='font-medium pl-15 normal'> Mar</span> </span>
                  </div>
            </div>
            <h2 className='relative top-23 left-50 font-bold text-4xl event-detail-text'>Health Walk <span className='text-2xl font-light span-text'> /Ayeduase</span></h2>
            <button className='btns h-12 w-19 relative top-23 left-100 event-detail-text event-btn'>Details</button>

        </div>
        {/* <div className='flex border-b-1 h-55 mt-7 events-list'>
            <div className=''>
                <img className='w-70 pl-5 mb-5  event-image' src={assets.healthwalk1} alt="" />
                  <div className='relative bottom-30 left-60 ml-20 event-text'>
                  <span className='text-5xl relative top-6 ml'>23</span> <span className='font-light italic pl-2'>Sat <br />
                   <span className='font-medium pl-15 normal'> Mar</span> </span>
                  </div>
            </div>
            <h2 className='relative top-23 left-40 font-bold text-4xl event-detail-text'>Weight Lifting Challenge /<span className='text-2xl font-light span-text'>Ayeduase</span></h2>
            <button className='btns h-12 w-35 relative top-23 left-50 event-detail-text event-btn'>Register Now</button>
            <button className='btns h-12 w-19 relative top-23 left-50 event-detail-text event-btn'>Details</button>
        </div>
        <div className='flex border-b-1 h-55 mt-7 events-list'>
            <div className=''>
                <img className='w-70 pl-5 mb-5 event-image' src={assets.healthwalk1} alt="" />
                  <div className='relative bottom-30 left-60 ml-20 event-text'>
                  <span className='text-5xl relative top-6 ml'>06</span> <span className='font-light italic pl-2'>Sat <br />
                   <span className='font-medium pl-15 normal'> Apr</span> </span>
                  </div>
            </div>
            <h2 className='relative top-23 left-50 font-bold text-4xl event-detail-text'>Game & Sports /<span className='text-2xl font-light span-text'>Kotei</span></h2>
            <button className='btns h-12 w-35 relative top-23 left-85 event-detail-text event-btn'>Register Now</button>
            <button className='btns h-12 w-19 relative top-23 left-90 event-detail-text event-btn'>Details</button>
        </div> */}
        <div>
            <h2 className='text-3xl font-bold mt-10 text-center'>Why Participate?</h2>
            <ul className='pt-10 section-text'>
                <li><span className='font-bold ml-2 mr-2'>Boost Motivation:</span> Push yourself with others who share your passion for fitness.
                </li>
                <li className='mt-2'><span className='font-bold ml-2 mr-2'>Learn New Skills:</span> Whether it’s a workout technique or a new training style, there’s always something to learn.
                </li>
                <li className='mt-2'><span className='font-bold ml-2 mr-2'>Community Support:</span> Connect with like-minded individuals and build lasting friendships.
                </li>
                <li className='mt-2'> <span className='font-bold ml-2 mr-2'>Fun Atmosphere: </span> Fitness doesn’t have to be all work and no play—expect challenges, laughter, and a lot of fun!
                </li>
            </ul>
            <h2 className='font-bold text-2xl ml-5 mt-7'>Stay Updated!</h2>
            <p className='pb-6 text-left section-text'>Don't miss out on future events! Be sure to check this page regularly for updates or sign up for our newsletter to get event details sent directly to your inbox.</p>
        </div>
    </div>
  )
}

export default Events
