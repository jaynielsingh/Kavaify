import "../../App.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
// import Pricing from "./components/Pricing";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
// import Register from "./components/Register";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
