import React from 'react';
import { assets } from '../assets/assets';

const Events = () => {
  return (
    <div id='Events' className='events-div bg-black text-white relative bottom-138 overflow-x-hidden'>
      <div className='px-4 md:px-8'>
        <h1 className='section-heading event-h1 text-center text-3xl md:text-4xl font-bold'>
          Upcoming Events
        </h1>
        <p className='section-text text-center mt-4'>
          Stay active, stay motivated! At Fitness Guru, we love bringing the community together 
          through fun and engaging fitness events. Whether you're a seasoned athlete or just 
          starting your fitness journey, our events offer something for everyone. Check out our 
          upcoming events and be sure to join us!
        </p>
      </div>

      {/* Event List */}
      <div className='flex flex-col gap-10 md:gap-16 px-4 mt-6'>
        {/* Event 1 */}
        <div className='flex flex-col md:flex-row items-center justify-between border-b-2 pb-6'>
          <div className='w-full md:w-1/3'>
            <img className='w-full mb-5 event-image' src={assets.healthwalk1} alt="Health Walk" />
            
          </div>

          <div className='w-full md:w-2/3 pl-5 mt-5 md:mt-0'>
            <div className='event-date event1'>
                <h2 className='text-6xl relative top-25 font-bold'>23</h2>
                <p className='relative top-10 ml-20 italic'>
                <span >Sat</span> <br />
                <span className='text-2xl font-bold'>Mar</span>
                </p>
            </div>
            <h2 className='text-4xl pl-40 font-bold event-detail-text'>
              Health Walk <span className='text-2xl font-light'> /Ayeduase</span>
            </h2>
            <button className='btns mt-4 h-12 w-32 event-btn'>
              Details
            </button>
          </div>
        </div>

        {/* Event 2 */}
        <div className='flex flex-col md:flex-row items-center justify-between border-b-2 pb-6'>
          <div className='w-full md:w-1/3'>
            <img className='w-full mb-5 event-image' src={assets.weightLifting} alt="Health Walk" />
            
          </div>
             
          <div className='w-full md:w-2/3 pl-5 mt-5 md:mt-0'>
          <div className='event-date'>
                <h2 className='text-6xl relative top-25 font-bold'>30</h2>
                <p className='relative top-10 ml-20 italic'>
                <span >Sat</span> <br />
                <span className='text-2xl font-bold'>Mar</span>
                </p>
            </div>

            <h2 className='text-4xl pl-40 font-bold event-detail-text'>
              Weight Lifting Challenge <span className='text-2xl font-light'> /Ayeduase</span>
            </h2>
            <button className='btns mt-4 h-12 w-32 event-btn'>
              Details
            </button>
          </div>
        </div>

        {/* Event 3 */}
        <div className='flex flex-col md:flex-row items-center justify-between border-b-2 pb-6'>
          <div className='w-full md:w-1/3'>
            <img className='w-full mb-5 event-image' src={assets.football} alt="Health Walk" />
            
          </div>

          <div className='w-full md:w-2/3 pl-5 mt-5 md:mt-0'>
          <div className='event-date event1'>
                <h2 className='text-6xl relative top-25 font-bold'>13</h2>
                <p className='relative top-10 ml-20 italic'>
                <span >Sat</span> <br />
                <span className='text-2xl font-bold'>Apr</span>
                </p>
            </div>

            <h2 className='text-4xl pl-40 font-bold event-detail-text'>
              Games & Sports <span className='text-2xl font-light'> /Kotei</span>
            </h2>
            <button className='btns mt-4 h-12 w-32 event-btn'>
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Why Participate Section */}
      <div className='text-center mt-12'>
        <h2 className='text-3xl font-bold'>Why Participate?</h2>
        <ul className='pt-10 section-text justify-items-start  '>
          <li><span className='font-bold'>Boost Motivation:</span> Push yourself with others who share your passion for fitness.</li>
          <li className='mt-2 '><span className='font-bold'>Learn New Skills:</span> Whether it’s a workout technique or a new training style, there’s always something to learn.</li>
          <li className='mt-2'><span className='font-bold'>Community Support:</span> Connect with like-minded individuals and build lasting friendships.</li>
          <li className='mt-2'><span className='font-bold'>Fun Atmosphere:</span> Fitness doesn’t have to be all work and no play—expect challenges, laughter, and a lot of fun!</li>
        </ul>

        <h2 className='font-bold text-2xl mt-7'>Stay Updated!</h2>
        <p className='pb-6 text-left section-text'>
          Don't miss out on future events! Be sure to check this page regularly for updates or sign up for our newsletter to get event details sent directly to your inbox.
        </p>
      </div>
    </div>
  );
};

export default Events;
