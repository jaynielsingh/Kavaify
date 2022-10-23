import React from "react";

const Header = () => {
  return (
    <div id="home">
      <header class="bg-dark py-5 header-bg" >
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
              <div class="text-center my-5">
                <h1 class="display-5 fw-bolder text-white mb-2">
                  Welcome To Kavaify, Your Only Web Solution
                </h1>
                <p class="lead text-white-50 mb-4">
                  A better way of building your elegant website, no more boring and unprofessional WordPress websites, let the professionals help.
                </p>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a
                    class="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a class="btn btn-outline-light btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
