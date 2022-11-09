import React from "react";
import "./header.styles.css"
import AOS from "aos";

const Header = () => {
  AOS.init();
  return (
    <div id="home">
      <header class="bg-dark py-5 header-background">
        <video autoPlay loop muted poster="../public/asset/video/Kavaify.mp4" >...</video>
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
              <div class="text-center my-5 pb-5">
                <h1
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  class="header-style  display-5 fw-bolder text-white mb-2"
                >
                  Kavaify
                </h1>
                {/* <h4 class="lead text-white-50 mb-4">
                  Web Solution For Small Business Owners
                </h4> 
                div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a class="btn btn-dark btn-lg px-4 me-sm-3" href="#features">
                    Get Started
                  </a>
                  {/* <a class="btn btn-outline-light btn-lg px-4" href="#!">
                    Learn More
                  </a> 
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
