import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <div id="footer">
      <footer class="py-5">
        <div class="container px-5">
          <p class="m-0 text-center text-white">
            Copyright &copy; Kavaify {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
