import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <section class="bg-light py-5">
        <div class="container px-5 my-5 px-5">
          <div class="text-center mb-5">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i class="bi bi-envelope"></i>
            </div>
            <h2 class="fw-bolder">Get in touch</h2>
            <p class="lead mb-0">We'd love to hear from you</p>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
              <form id="contactForm">
              <input className="form-control mb-3" placeholder="Name" />
                <input className="form-control mb-3" placeholder="Email" />
                <input className="form-control mb-3" placeholder="Phone Number" />
                <textarea
                  id="message"
                  className="form-control mb-3"
                  placeholder="Message"
                  rows={4}
                ></textarea>
                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-lg disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
