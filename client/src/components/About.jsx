import React from "react";
import AOS from "aos";

const About = () => {
  AOS.init();
  return (
    <div id="about">
      <div class=" text-secondary px-4 py-5 text-center">
        <div data-aos="zoom-in" class="py-5">
          <h1 class="display-5 fw-bold text-white">
            Welcome to <small class="green-word">Kavaify</small>
          </h1>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div class="col-lg-6 mx-auto">
              <h3 class="text-white fs-5 mb-4">
                Kavaify is here to help Small Businesses with their web needs, from building
                your website to custom web applications without you having to
                worry. A professional Business like yours needs a professionally
                built website.
              </h3>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button
                  type="button"
                  class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  Register
                </button>
                <button type="button" class="btn btn-outline-light btn-lg px-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
