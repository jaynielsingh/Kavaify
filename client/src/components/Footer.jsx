import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="py-5 bg-dark">
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
