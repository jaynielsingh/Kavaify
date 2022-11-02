import React from "react";

const Register = () => {
  return (
    <div>
      <form class="form-signin  ">
        <h1 class="h3 mb-3 text-center ">Register</h1>
        <input className="formfghasdjg-control mb-3" placeholder="Name" />
        <input className="form-control mb-3" placeholder="Email" />
        <input className="form-control mb-3" placeholder="Phone Number" />

        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
