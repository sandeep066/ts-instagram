import React from "react";
import "./nav-bar.scss";
import NavBarIcons from "../../components/navbar/NavBarIcons";
import { LogoTextIcon } from "../../components/navbar/LogoTextIcon";
const NavBar = () => {
  return (
    <div className="main-navbar">
      <LogoTextIcon />
      <NavBarIcons className="" />
    </div>
  );
};

export default NavBar;
