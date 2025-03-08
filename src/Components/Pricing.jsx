import React from 'react'

const Pricing = () => {
  return (
    <div id='Pricing' className='pricing-div relative bottom-138 h-auto sm:h-300 py-10 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div>
          <h1 className='section-heading price-h1 text-center text-3xl sm:text-4xl'>Our Membership Plan</h1>
          <p className='section-text text-center sm:text-left'>
            We offer flexible membership options to suit your goals and lifestyle.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row sm:gap-4 mt-8 justify-center items-center'>
          {/* Basic Plan Section */}
          <div className='price-section ml-0 sm:ml-3 Basic border-1 mb-8 sm:mb-0'>
            <h3 className='text-2xl font-medium text-center'>BASIC</h3>
            <h2 className='text-3xl ml-0 sm:ml-20 font-medium price text-center sm:text-left'>GH₵ 300/Month</h2>
            <ul className='price-list mt-5'>
              <li>Home Workout Plan</li>
              <li>Standard Workout Plan</li>
              <li>Access to 5 group classes per week</li>
              <li>Access to Standard locker room and shower</li>
              <li>Access to 50% of gym equipment</li>
              <li>Access to general events</li>
            </ul>
            <button className='btns pricing-btn basic-btn h-12 w-full sm:w-35 relative top-20 sm:left-30'>Register Now</button>
          </div>

          {/* Pro Plan Section */}
          <div className='price-section Pro border-1 mb-8 sm:mb-0'>
            <h3 className='text-2xl price-group font-medium text-center'>PRO</h3>
            <h2 className='text-3xl ml-0 sm:ml-20 font-medium price text-center sm:text-left'>GH₵ 500/Month</h2>
            <ul className='price-list mt-5'>
              <li>Home Workout Plan</li>
              <li>Standard Workout Plan</li>
              <li>Personalized Training Sessions</li>
              <li>Access to 8 group classes per week</li>
              <li>Access to Standard locker room and shower</li>
              <li>Access to 70% of gym equipment</li>
              <li>Access to selective exclusive events</li>
            </ul>
            <button className='btns pricing-btn pro-btn basic-btn h-12 w-full sm:w-35 relative top-13 sm:left-30'>Register Now</button>
          </div>

          {/* Premium Plan Section */}
          <div className='price-section Premium border-1'>
            <h3 className='text-2xl font-medium text-center'>PREMIUM</h3>
            <h2 className='text-3xl ml-0 sm:ml-20 font-medium price text-center sm:text-left'>GH₵ 750/Month</h2>
            <ul className='price-list mt-5'>
              <li>Home Workout Plan</li>
              <li>Standard Workout Plan</li>
              <li>Access to all group classes</li>
              <li>Access to VIP locker room and shower</li>
              <li>Access to all gym equipment</li>
              <li>Access to all exclusive events</li>
              <li>Personal Trainer</li>
              <li>1-on-1 fitness consultation per month</li>
            </ul>
            <button className='btns pricing-btn basic-btn pre-btn h-12 w-full sm:w-35 relative top-7 sm:left-30'>Register Now</button>
          </div>
        </div>

        {/* Additional Information Section */}
        <div>
          <h2 className='font-bold text-3xl mt-20 text-center sm:text-left'>Stay Updated!</h2>
          <p className='pb-6 section-text text-center sm:text-left'>
            All persons irrespective of their membership plans will have access to:
          </p>
          <ul className='price-list section-text text-center sm:text-left'>
            <li>Free Wi-Fi</li>
            <li>Restroom Facilities</li>
            <li>Fresh Juice</li>
            <li>Free Car Parking</li>
          </ul>
          <h2 className='font-bold text-3xl mt-7 text-center sm:text-left'>Special Offers!</h2>
          <h3 className='font-bold section-text text-center sm:text-left'>Free First Month</h3>
          <p className='section-text text-center sm:text-left'>
            Sign-up for a 6-month or 12-month Pro/Premium plan and get the 1st month free
          </p>
          <br />
          <h3 className='font-bold text-center sm:text-left'>Referral Program</h3>
          <p className='text-center sm:text-left'>
            Refer a friend and both of you get 10% off the next month's membership
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
