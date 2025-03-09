import React from 'react';

const ClassSchedule = () => {
  return (
    <div id="ClassSchedule" className="schedule overflow-hidden p-6 bg-gray-100 ">
      {/* Top Section with Gradient */}
      <div className=" p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-semibold text-center mb-6 text-black section-heading">Our Class Schedule</h1>
        <p className="text-lg text-center mb- text-black">
          At Fitness Guru Gym, we offer a wide variety of classes to help you stay motivated, push your limits, and achieve your fitness goals. 
          Whether you're looking to build strength, improve flexibility, or boost your endurance, we’ve got a class for you!
        </p>
      </div>

      <div className="overflow-x-auto bg-gray-50">
        <table className="min-w-full table-auto shadow-lg rounded-lg">
          <caption className="text-2xl font-semibold mb-4 text-center text-gray-900">Gym Weekly Class Schedule</caption>
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-6 py-3 text-left">Time</th>
              <th className="px-6 py-3 text-left">Monday</th>
              <th className="px-6 py-3 text-left">Tuesday</th>
              <th className="px-6 py-3 text-left">Wednesday</th>
              <th className="px-6 py-3 text-left">Thursday</th>
              <th className="px-6 py-3 text-left">Friday</th>
              <th className="px-6 py-3 text-left">Saturday</th>
              <th className="px-6 py-3 text-left">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
              <td className="bg-gray-200 px-6 py-4 font-semibold text-gray-700 hover:bg-gray-300">8:00 AM</td>
              <td className="bg-blue-200 px-6 py-4 hover:bg-blue-300 transition-colors duration-300">
                Yoga<br />
                    <span className='font-bold italic'>Jane Foster</span> <br />
                <span className="text-xs text-gray-600">8:00 - 10:00 AM</span>
              </td>
              <td></td>
              <td className="bg-green-200 px-6 py-4 hover:bg-green-300 transition-colors duration-300">
               Cardio<br />
               <span className='font-bold italic'>Bruce Wayne</span><br />
                <span className="text-xs text-gray-600">8:00 - 10:00 AM</span>
              </td>
              <td></td>
              <td></td>
              <td className="bg-green-200 px-6 py-4 hover:bg-green-300 transition-colors duration-300">
                Cardio<br />
                <span className='font-bold italic'>Bruce Wayne</span> <br />
                <span className="text-xs text-gray-600">8:00 - 10:00 AM</span>
              </td>
              <td></td>
            </tr>
            <tr className="hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
              <td className="bg-gray-200 px-6 py-4 font-semibold text-gray-700 hover:bg-gray-300">12:00 PM</td>
              <td></td>
              <td className="bg-teal-400 px-6 py-4 hover:bg-teal-500 transition-colors duration-300">
                Cross-fit<br />
                <span className='font-bold italic'>Mandy Rose</span><br />
                <span className="text-xs text-gray-600">12:00 - 2:00 PM</span>
              </td>
              <td></td>
              <td className="bg-indigo-500 px-6 py-4 hover:bg-indigo-600 transition-colors duration-300">
                Fitness<br />
                <span className='font-bold italic'>Sub Zero</span> <br />
                <span className="text-xs text-gray-600">12:00 - 2:00 PM</span>
              </td>
              <td></td>
              <td></td>
              <td className="bg-purple-400 px-6 py-4 hover:bg-purple-500 transition-colors duration-300">
                Body Building<br />
                <span className='font-bold italic'>Shaka Zulu</span> <br />
                <span className="text-xs text-gray-600">12:00 - 2:00 PM</span>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
              <td className="bg-gray-200 px-6 py-4 font-semibold text-gray-700 hover:bg-gray-300">3:00 PM</td>
              <td className="bg-indigo-500 px-6 py-4 hover:bg-indigo-600 transition-colors duration-300">
                Fitness<br />
                <span className='font-bold italic'> Sub Zero</span><br />
                <span className="text-xs text-gray-600">3:00 - 5:00 PM</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className="bg-red-500 px-6 py-4 hover:bg-red-600 transition-colors duration-300">
                Martial Arts<br />
                <span className='font-bold italic'>Ronda Rousey</span> <br />
                <span className="text-xs text-gray-600">3:00 - 5:00 PM</span>
              </td>
              <td className="bg-purple-400 px-6 py-4 hover:bg-purple-500 transition-colors duration-300">
                Body Building<br />
                <span className='font-bold italic'>Shaka Zulu</span><br />
                <span className="text-xs text-gray-600">3:00 - 5:00 PM</span>
              </td>
              <td></td>
            </tr>
            <tr className="hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
              <td className="bg-gray-200 px-6 py-4 font-semibold text-gray-700 hover:bg-gray-300">6:00 PM</td>
              <td></td>
              <td className="bg-red-500 px-6 py-4 hover:bg-red-600 transition-colors duration-300">
                Martial Arts<br />
                <span className='font-bold italic'>Ronda Rousey</span><br />
                <span className="text-xs text-gray-600">6:00 - 8:00 PM</span>
              </td>
              <td></td>
              <td className="bg-teal-400 px-6 py-4 hover:bg-teal-500 transition-colors duration-300">
                Cross-fit<br />
                <span className='font-bold italic'> Mandy Rose</span><br />
                <span className="text-xs text-gray-600">6:00 - 8:00 PM</span>
              </td>
              <td></td>
              <td className="bg-blue-200 px-6 py-4 hover:bg-blue-300 transition-colors duration-300">
                Yoga<br />
                <span className='font-bold italic'>Jane Foster</span><br />
                <span className="text-xs text-gray-600">6:00 - 8:00 PM</span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center underline text-gray-900">Personal Training</h3>
          <p className="text-lg text-center mt-4  text-gray-700">
            Any time aside from the stipulated times for classes that is within the gym's working hours can be used for personal training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
