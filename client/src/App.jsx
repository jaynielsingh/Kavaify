import React from "react";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import "./index.css";

// import Pricing from "./components/Pricing/Pricing";

function App()
{
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
