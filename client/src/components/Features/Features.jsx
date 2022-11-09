import React from "react";
import "./features.styles.css"
import AOS from "aos";

const Features = () => {
  AOS.init();
  return (
    <div>
      <section class="py-5 " id="features">
        <div class="container text-center rounded-4 py-5 px-5 my-5">
          <div class="row justify-content-center px-5 gx-5">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
              class="container card feature-card rounded-3 text-white"
              
            >
              <div class="feature feature-icon col-lg-4  rounded-5 ">
                <i class="bi bi-collection"></i>
              </div>
              <h1 class="h4 fw-bolder">Professionally Built Website</h1>
              <h4 class="text-dark mb-5 mt-3">
                Your site will be professionally built, and made to attract more
                traffic to your business. Now days everything is on the web, so
                if your website looks unprofessional, people will assume your
                business is also unprofessional.
              </h4>
              {/* <a class="text-decoration-none" href="#home">
                Call to action
                <i class="bi bi-arrow-right"></i>
              </a> */}
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
              class="card feature-card text-white "
            >
              <div class="feature feature-icon text-white rounded-5 mb-3">
                <i class="bi bi-building"></i>
              </div>
              <h1 class="h4 fw-bolder">Hosting And Business Email</h1>
              <h4 class="text-dark mb-5 mt-3">
                We will host your website and provide you with your very own
                business email address. With our service, your website will be
                kept up to date with current software, providing you with a
                reliable professional website while you focus on your business.
              </h4>
              {/* <a class="text-decoration-none" href="#price">
                Call to action
                <i class="bi bi-arrow-right"></i>
              </a> */}
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
              class="card feature-card text-white "
            >
              <div class="feature feature-icon text-white rounded-5 mb-3">
                <i class="bi bi-toggles2"></i>
              </div>
              <h1 class="h4 fw-bolder">Develope Web Application</h1>
              <h4 class="text-dark mb-5 mt-3" >
                Easily add more features to your site like a login features,
                booking appointments, and ordering system and much more.
              </h4>
              {/* <a class="text-decoration-none" href="#contact">
                Call to action
                <i class="bi bi-arrow-right"></i>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
