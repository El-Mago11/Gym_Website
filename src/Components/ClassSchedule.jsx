import React from 'react'

const ClassSchedule = () => {
  return (
    <div id='Class Schedule' className=' schedule '>
        <div>
        <h1 className='section-heading'>Our Class Schedule</h1>
        <p className='section-text'>
      At FitZone Gym, we offer a wide variety of classes to help you stay motivated, push your limits, and achieve your fitness goals. 
      Whether you're looking to build strength, improve flexibility, or boost your endurance, we’ve got a class for you!</p>  
        </div>
      <div table-div>
        <table  className=' '>
            <caption>Gym Weekly Class Schedule</caption>
            <tr className='gap-5'>
                <th className='bg-gray-300'>Time</th>
                <th className='bg-gray-300'>Monday</th>
                <th className='bg-gray-300'>Tuesday</th>
                <th className='bg-gray-300'>Wednesday</th>
                <th className='bg-gray-300'>Thursday</th>
                <th className='bg-gray-300'>Friday</th>
                <th className='bg-gray-300'>Saturday</th>
                <th className='bg-gray-300'>Sunday</th>

            </tr>
            <tr>
                <td className='bg-gray-300' >8:00 AM</td>
                <td className=' bg-pink-400'>Yoga
                    <br />
                    Jane Foster <br />
                    <span className='text-left '>  8:00 - 10:00 AM  </span>
                </td>
                <td></td>
                <td className='bg-yellow-300'>Cardio
                <br />
                    Instructor <br />
                    <span className='text-left '>  8:00 - 10:00 AM  </span>
                </td>
                <td></td>
                <td></td>
                <td className='bg-yellow-300'>Cardio
                <br />
                Instructor <br />
                    <span className='text-left '>  8:00 - 10:00 AM  </span>
                </td>

                <td></td>
                
            </tr>
            <tr>
                <td className='bg-gray-300'>12:00 PM</td>
                <td></td>
                
                <td className='bg-lime-500'>Cross-fit
                <br />
                    Instructor <br />
                    <span className='text-left '>  12:00 - 2:00 PM  </span>
                </td>
                <td></td>
                
                <td className='bg-blue-500'>Fitness
                <br />
                    Shaka Zulu <br />
                    <span className='text-left '>  12:00 - 2:00 PM   </span>
                </td>
                <td></td>
                <td></td>
                <td className='bg-purple-600'>Body Buildibg
                <br />
                    Jane Foster <br />
                    <span className='text-left '>  12:00 - 2:00 PM   </span>
                </td>
                
            </tr>
            <tr>
                <td className='bg-gray-300'>3:00 PM</td>
                <td className='bg-blue-500'>Fitness
                <br />
                   <span className='font-bold'>Shaka Zulu</span> <br />
                    <span className='text-left '> 3:00 - 5:00 PM  </span>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td className='bg-red-500'>Martial Arts
                <br />
                    Jane Foster <br />
                    <span className='text-left '>  3:00 - 5:00 PM  </span>
                </td>
                
                <td className='bg-purple-600'>Body Buildibg
                <br />
                    Jane Foster <br />
                    <span className='text-left '> 3:00 - 5:00 PM  </span>
                </td>
                <td></td>
                
                
            </tr>
            <tr>
                <td className='bg-gray-300'> 6:00 PM</td>
                <td></td>
                <td className='bg-red-500'>Martial Arts
                <br />
                    Jane Foster <br />
                    <span className='text-left '> 6:00 - 8:00 PM  </span>
                </td>
                <td></td>
                <td className='bg-lime-500'>Cross-fit
                <br />
                    Instructor <br />
                    <span className='text-left '>  6:00 - 8:00 PM  </span>
                </td>
                <td></td>
                <td className='yoga bg-pink-400'>Yoga
                <br />
                    Jane Foster <br />
                    <span className='text-left '>  6:00 - 8:00 PM  </span>
                </td>
             
                <td></td>
                
            </tr>
        </table>
        <div>
            <h3 className='font-bold text-center text-2xl mt-5 underline'>Personal Training</h3>
            <p className='section-text'>Any time aside from the stipulated times for classes that is within the gym's working hours can be used for personal training.</p>
        </div>
      </div>
    </div>
  )
}

export default ClassSchedule
