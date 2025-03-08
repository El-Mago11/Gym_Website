import React, { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";

// Lazy load components
const Navbar = lazy(() => import("./Components/Navbar"));
const About = lazy(() => import("./Components/About"));
const Classes = lazy(() => import("./Components/Classes"));
const ClassSchedule = lazy(() => import("./Components/ClassSchedule"));
const Trainers = lazy(() => import("./Components/Trainers"));
const Events = lazy(() => import("./Components/Events"));
const Pricing = lazy(() => import("./Components/Pricing"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const Footer = lazy(() => import("./Components/Footer"));

function App() {
  return (
    <div id="full-section" className="h-[2915px]">
      <ToastContainer />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <About />
        <Classes />
        <ClassSchedule />
        <Trainers />
        <Events />
        <Pricing />
        <Testimonials />
        <ContactUs />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
