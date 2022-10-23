import React from "react";

const Pricing = () => {
  return (
    <div id="pricing">
      <section class="bg-light py-5 border-bottom">
        <div class="container px-5 my-5">
          <div class="text-center mb-5">
            <h2 class="fw-bolder">Pricing Plan</h2>
            <p class="lead mb-0">Our Best Pricing </p>
          </div>

          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6 col-xl-4 mx-5">
              <div class="card mb-5 mb-xl-0">
                <div class="card-body p-5">
                  <div class="small text-uppercase fw-bold text-muted">
                    Standard
                  </div>
                  <div class=" mb-3">
                    <span
                      style={{ textDecoration: "line-through", color: "red" }}
                      class="display-4 fw-bold"
                    >
                      $5000
                    </span>
                    <span>Regular</span>
                  </div>

                  <div class="mb-3">
                    <span style={{color: "green"}} class="display-4 fw-bold">$1000</span>
                    <span class="text-muted" > Sale</span>
                  </div>

                  <ul class="list-unstyled mb-4">
                    <li class="mb-2">
                      <i class="bi bi-check text-primary"></i>
                      <strong>1-10 pages</strong>
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-check text-primary"></i>
                      Professionally Designed
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-check text-primary"></i>
                      Includes domain name
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-check text-primary"></i>
                      SEO Optimization
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a class="btn btn-outline-primary" href="#!">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xl-4">
              <div class="card mb-5 mb-xl-0">
                <div class="card-body p-5">
                  <div class="small text-uppercase fw-bold">
                    <i class="bi bi-star-fill text-warning"></i>
                    Service Fee
                  </div>
                  <div class="mb-3">
                    <span class="display-4 fw-bold">$59</span>
                    <span class="text-muted">/ mo.</span>
                  </div>
                  <ul class="list-unstyled mb-4">
                    <li class="mb-2">
                      <i class="bi bi-check text-primary"></i>
                      <strong>Business Email Address</strong>
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-check text-primary"></i>
                      <strong>Site Maintenance </strong>
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-check text-primary"></i>
                      24/7 Dedicated support
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-check text-primary"></i>
                      Software Updates
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a class="btn btn-primary" href="#!">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Pricing;
