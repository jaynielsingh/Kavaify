import React from "react";
import "./contact.styles.css"

const Contact = () => {
  return (
    <div id="contact">
      <section class=" text-white py-5">
        <div class=" px-5 my-5 px-5">
          <div class="text-center mb-5">
            <div class="feature contact-icon  bg-gradient text-white rounded-3 mb-3">
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
                    class="btn bg-dark btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
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
