import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Pricing />
      <Contact />
      <Features/>
      <Register/>
      <Footer />
    </div>
  );
}

export default App;
