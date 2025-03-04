import React from 'react'
import { assets, colours } from '../assets/assets'
import Home from './Home'


const Navbar = () => {
  return (
    <div className=''> 
      <div className='flex flex-row navbar' style={{backgroundColor:colours.black,}}>
        <div className='w-20'>
        <img src={assets.logo} style={{}} alt="" />
        </div>
        <span className='text-white pt-6 font-bold'>FITNESS GURU</span>
        <div className=''>
            <ul className='flex flex-row gap-7 text-white pt-5 ml-30 ' style={{fontSize:17}}>
                <li className='nav-links'>
                    <a href="#Home">Home</a>
                </li>
                <li className='nav-links'>
                    <a href="#About">About</a>
                </li>
                <li className='nav-links'>
                    <select className='w-19 drop-menu' name="" id="">Classes
                        <option value="1" className='drop-links'>
                           <a href="#Classes"> Classes</a>
                        </option>
                        <option value="2" className='drop-links'>
                            <a href="#Class Schedule">Class Schedule</a>
                        </option>
                    </select>
                </li>
                <li className='nav-links'>
                    <a href="#Trainers">Trainers</a>
                </li>
                <li className='nav-links'>
                    <a href="#Events">Events</a>
                </li>
                {/* <li className='nav-links'>
                    <a href="#Blog">Blog</a>
                </li> */}
                <li className='nav-links'>
                    <a href="#Pricing">Pricing</a>

                </li>
                <li className='nav-links'>
                    <a href="#Testimonials">Testimonials</a>
                </li>
                <li className='nav-links'>
                    <a href="#Contact">Contact</a>
                </li>



            </ul>
        </div>
        
      </div>
      <Home/>
    </div>
  )
}

export default Navbar
