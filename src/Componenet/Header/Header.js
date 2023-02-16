import React from "react";
import "./Header.css";
import Logo from "../../Assets/Image/Logo.png";
import Logout from "../../Assets/Image/Logout.png";

function Header() {
  return (
    <div className=" my-3">
      <div className="card py-2 border-radius-2 Header">
        <div className="Header-Logo">
          <img src={Logo} alt="" className="py-1" />
        </div>
        <div>
          <label htmlFor="Category" className="py-1">
            Category
          </label>
          <select class="form-select" className="Select-input">
            <option selected>Es Environmental</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <label htmlFor="Category" className="py-1">
            Category
          </label>
          <select class="form-select" className="Select-input">
            <option selected>Es Environmental</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <label htmlFor="Category" className="py-1">
            Category
          </label>
          <select class="form-select" className="Select-input">
            <option selected>Es Environmental</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="Header-Logout">
          <img src={Logout} alt="Logout" />
        </div>
      </div>
    </div>
  );
}

export default Header;
