import React from "react";
import AOS from "aos";

const Features = () => {
  AOS.init();
  return (
    <div>
      <section class="py-5 border-bottom" id="features">
        <div class="container px-5 my-5">
          <div class="row px-5 gx-5">
            <div data-aos="fade-down-left" class="col-lg-4 mb-5 mb-lg-0">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3 features-animate">
                <i class="bi bi-collection"></i>
              </div>

              <h2 class="h4 fw-bolder">Professionally Built Website</h2>
              <p>
                Your site will be professionally built, and made to attract more
                traffic to your business. Now days everything is on the web, so
                if your website looks unprofessional, people will assume your
                business is also unprofessional.
              </p>
              <a class="text-decoration-none" href="#home">
                Call to action
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
            <div data-aos="fade-up-left" class="col-lg-4 mb-5 mb-lg-0">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="bi bi-building"></i>
              </div>
              <h2 class="h4 fw-bolder">Hosting And Business Email</h2>
              <p>
                We will host your website and provide you with your very own
                business email address. With our service, your website will be
                kept up to date with current software, providing you with a
                reliable website without you ever writing any lines of code.
              </p>
              <a class="text-decoration-none" href="#price">
                Call to action
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
            <div data-aos="fade-up-right" class="col-lg-4">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="bi bi-toggles2"></i>
              </div>
              <h2 class="h4 fw-bolder">Develope Web Application</h2>
              <p>
                Easily add more features to your site like a login features,
                booking appointments, and ordering system and much more.
              </p>
              <a class="text-decoration-none" href="#contact">
                Call to action
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
