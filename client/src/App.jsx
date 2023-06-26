import React, { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header-v2/Header";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/aboutUs";
import "./index.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import Process from "./components/Process/process";



// import Pricing from "./components/Pricing/Pricing";

function App()
{
  useEffect(() =>
  {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <AboutUs/>
      <About />
      <Process/>
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
