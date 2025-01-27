import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("Navbar");
  const showNav = () => {
    setActive("NavBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("NavBar");
  };
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="###" className="logo">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>
        <div onClick={showNav} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </header>
      <div className={active}>
        <ul className="NavLists flex">
          <li className="NavItem">
            <a href="###" className="NavLink">
              Home
            </a>
          </li>
          <li className="NavItem">
            <a href="###" className="NavLink">
              Packages
            </a>
          </li>
          <li className="NavItem">
            <a href="###" className="NavLink">
              Shop
            </a>
          </li>
          <li className="NavItem">
            <a href="###" className="NavLink">
              About
            </a>
          </li>
          <li className="NavItem">
            <a href="###" className="NavLink">
              Pages
            </a>
          </li>
          <li className="NavItem">
            <a href="###" className="NavLink">
              News
            </a>
          </li>
          <li className="NavItem">
            <a href="###" className="NavLink">
              Contact
            </a>
          </li>
          <button className="btn">
            <a href="##">Book Now</a>
          </button>
        </ul>
        <div onClick={removeNavbar} className="closeNavBar">
          <IoIosCloseCircle className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
