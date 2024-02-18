import React from "react";
import "./nav-bar.scss";
import logo from "../../assets/icons/insta-text-logo.svg";
import NavBarIcons from "../../components/navbar/NavBarIcons";

const NavBar = () => {
  return (
    <div className="main-navbar">
      <a href="">
        <img src={logo} alt="Instagram text logo" className="logo" />
      </a>
      <NavBarIcons className="" />
    </div>
  );
};

export default NavBar;
