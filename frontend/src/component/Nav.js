import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Nav() {
  
  const [navScroll, setNavScroll] = useState(false);

  const nav_on_scroll = () => {
    if (window.scrollY >= 50) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", nav_on_scroll);

  return (
    <>
      <div className="nav">
        <div className="nav_inner">

          <div className={navScroll ? "main_nav open" : "main_nav"}>
            <div className="logo">
            <Link to="/">
          <h1>Space Academy</h1>
          </Link>
            </div>

            <div className="menu">
              <ul>
                <li className="main_li" >
                  <NavLink activeClassName="nav_active" exact to="/">Home</NavLink>
                </li>
                <li className="main_li"> 
                <a href="http://spaceinnovationhub.com/" target="_blank" rel="noopener noreferrer">Space Innovation hub</a>
                </li>
                <li className="contact main_li">
                  <NavLink activeClassName="nav_active" exact to="/contact">Contact us</NavLink>
                </li>
                <li className="main_li">
                  <NavLink activeClassName="nav_active" exact to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav_mobile">
          <MobileMenu />
        </div>
      </div>
    </>
  );
}

export default Nav;
