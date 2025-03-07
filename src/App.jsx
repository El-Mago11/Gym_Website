import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Contact from "./Components/Classes"
import Classes from "./Components/Classes"
import ClassSchedule from "./Components/ClassSchedule"
import Trainers from "./Components/Trainers"
import Events from "./Components/Events"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import ContactUs from "./Components/ContactUs"
import { ToastContainer,toast } from "react-toastify"
import Footer from "./Components/Footer"


function App() {
  

  return (
    <div id="full-section" className=" h-2860">
     <ToastContainer/>
      <Navbar/>
      <About/>
      <Classes/>
      <ClassSchedule/>
      <Trainers/>
      <Events/>
      <Pricing/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
