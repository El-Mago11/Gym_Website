import React from 'react'

const Pricing = () => {
  return (
    <div id='Pricing' className='pricing-div relative bottom-138 h-250 border-1'>
      <div>
      <div>
        <h1 className='section-heading'>Our Membership Plan</h1>
        <p className='section-text'>
        We offer flexible membership options to suit your goals and lifestyle.
       </p>  
        </div>
        <div className='flex gap-4'>
            <div className='price-section ml-3  Basic border-1 '>
               <h3 className='text-2xl font-medium text-center'>BASIC</h3>
               <h2 className='text-3xl ml-20 font-medium'>GH₵ 300/Month</h2>
               <ul className='price-list mt-5 '>
                <li>Home Workout Plan</li>
                <li>Standard Workout Plan</li>
                <li>Access to 5 group classes per week</li>
                <li>Acess to Standard locker room and shower</li>
                <li>Acess to 50% of gym equipments</li>
                <li>Acess to general events</li>
               </ul>
               <button className='btns h-12 w-35 relative top-20 left-30 '>Register Now</button>

            </div>

            <div className='price-section   Basic border-1 '>
               <h3 className='text-2xl font-medium text-center'>PRO</h3>
               <h2 className='text-3xl ml-20 font-medium'>GH₵ 500/Month</h2>
               <ul className='price-list mt-5 '>
                <li>Home Workout Plan</li>
                <li>Standard Workout Plan</li>
                <li>Personalized Training Sections</li>
                <li>Access to 8 group classes per week</li>
                <li>Acess to Standard locker room and shower</li>
                <li>Access to 70% of gym equipments</li>
                <li>Access to selective exclusive events</li>
                


               </ul>
               <button className='btns h-12 w-35 relative top-13 left-30 '>Register Now</button>

            </div>

            <div className='price-section   Basic border-1 '>
               <h3 className='text-2xl font-medium text-center'>PREMIUM</h3>
               <h2 className='text-3xl ml-20 font-medium'>GH₵ 750/Month</h2>
               <ul className='price-list mt-5 '>
                <li>Home Workout Plan</li>
                <li>Standard Workout Plan</li>
                <li>Access to all group classes</li>
                <li>Access to VIP locker room and shower</li>
                <li>Acess to all of gym equipments</li>
                <li>Acess to all exclusive member</li>
                <li>Personal Trainer</li>
                <li>1-on-1 fitness consultation per month</li>

               </ul>
               <button className='btns h-12 w-35 relative top-7 left-30 '>Register Now</button>

            </div>

        </div>

        <div>
            <h2 className='font-bold text-2xl mt-7 text-center '>Stay Updated!</h2>
            <p className='pb-6'>All persons irrespective of their membership plans will have acccess to :</p>
            <ul className='price-list'>
                <li>Free Wi-Fi</li>
                <li>Restroom Facilities</li>
                <li>Fresh Juice</li>
                <li>Free Car Parking</li>
            </ul>
            <h2 className='font-bold text-2xl mt-7 text-center '>Special Offers!</h2>
            <h3 className='font-bold'>Free First Months</h3>
            <p>Sign-up for a 6-month or 12-month Pro/Premium and get 1st month free</p>
<br />
<h3 className='font-bold'>Referral Program</h3>
            <p>Refer a friend and both of you get 10% off the next month's membership</p>
            </div>
      </div>
    </div>
  )
}

export default Pricing
