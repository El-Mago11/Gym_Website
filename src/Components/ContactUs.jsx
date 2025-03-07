import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { falocationdot } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot,faEnvelope,faPhone, faClock,  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9729d79e-3b0f-443f-90cc-7d9d8aba2bd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(" ");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <div className=' relative bottom-140 contact-section '>
      <h1 className='section-heading'>Contact US</h1>
      <div className='flex gap-15 relative mt-20'>
         <div className='mt-0 w-140 '>
         <ul className='flex flex-col gap-4 ml-15  contact-details'>
         <li className='nav-links'>
      <FontAwesomeIcon className='icons footer-images' icon={faLocationDot}  size="2x" />
         <span className='ml-5'><a href="mailto:elmago6225@gmail.com">mojo1fitnessgym@gmail.com</a></span>
        </li>

          <li className='nav-links'>
      <FontAwesomeIcon className='icons footer-images' icon={faEnvelope}  size="2x" />
         <span className='ml-5'><a href="mailto:elmago6225@gmail.com">mojo1fitnessgym@gmail.com</a></span>
        </li>

        <li className='nav-links'>
       <FontAwesomeIcon className='icons footer-images' icon={faPhone}  size="2x"/>
       <span className='ml-5'><a href="tel:+233534236387">+233 53 423 6387</a></span>
    </li>

    <li className='nav-links'>
    <FontAwesomeIcon className='icons footer-images' icon={faClock}  size="2x"/>
    <span className='ml-5'>Monday - Saturday: 6:00AM to 8:30 PM</span>
    </li>

    <li className='nav-links'>
    <FontAwesomeIcon className='icons footer-images' icon={faClock}  size="2x"/>
    <span className='ml-5'>Sunday: 2:00PM to 8:30 PM</span>
    </li>

    <li className='nav-links'>
    <FontAwesomeIcon  className='icons footer-images'icon={faFacebook} size="2x"/>
    <span className='ml-5'>mojo1fitness</span>
    </li>

    <li className='nav-links'>
    <FontAwesomeIcon className='icons footer-images' icon={faInstagram} size="2x"/>
    <span className='ml-5'>mojo1fitness</span>
    </li>

    <li className='nav-links'>
      <FontAwesomeIcon className='icons footer-images' icon={faTwitter}  size="2x" />
         <span className='ml-5'><a href="mailto:elmago6225@gmail.com">mojo1fitness</a></span>
        </li>

     <li className='nav-links'>
      <FontAwesomeIcon className='icons footer-images' icon={faSnapchat}  size="2x" />
         <span className='ml-5'><a href="mailto:elmago6225@gmail.com">mojo1fitness</a></span>
        </li>
  </ul>
         </div>
<div className='map-responsive'>
<iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.3956282760596!2d-1.562193837250855!3d6.672767117958724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9462c61ac6a1%3A0x6e821527cb479c7a!2sMojo%201%20Gym!5e0!3m2!1sen!2sgh!4v1741045657367!5m2!1sen!2sgh" 
width="600" height="450" 
allowFullScreen loading="lazy" 
referrerPolicy="no-referrer-when-downgrade"
title='Responsive Google Map'
></iframe>
  </div>    
   


      </div>
      <div>

      </div>
     
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-0' >
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                <input className='w-full border border-gray-300 rounded py-3
                px-4 mt-2' type="text" name='Name' placeholder='Your Name ' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                <input className='w-full border border-gray-300 rounded py-3
                px-4 mt-2' type="email" name='Email' placeholder=' Your Email' required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                Message 
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required>

                </textarea>
            </div>
            <button className='btns text-white py-2 px-12 mb-10 rounded '>
                {result? result : "Send Message"}</button>
        </form>
        <ToastContainer />
                 </div>
  )
}

export default ContactUs
