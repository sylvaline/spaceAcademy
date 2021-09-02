import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import Slide from "react-reveal/Slide";

function MobileMenu() {
  const [isMenu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);
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
    <div className="mobile_nav_menu">
      <div className="nav_header">
        <div className="logo">
          <Link to="/">
          <h1>Space Academy</h1>
          </Link>
        </div>
        <div
          onClick={() => setMenu(!isMenu)}
          className={isMenu ? "menu-toggle open" : "menu-toggle"}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
          <div className="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div>
        {/* <Slide left> */}
          <ul className={isMenu ? "ul open" : "ul"}>
            <li onClick={closeMenu} className="">
            <NavLink activeClassName="nav_active" exact to="/">Home</NavLink>
            </li>
            <li onClick={closeMenu}>
            <a href="http://spaceinnovationhub.com/" target="_blank" rel="noopener noreferrer">Space Innovation hub</a>
            </li>

            <li onClick={closeMenu}>
            <NavLink activeClassName="nav_active" exact to="/contact">Contact us</NavLink>
            </li>
            <li onClick={closeMenu}>
            <NavLink activeClassName="nav_active" exact to="/login">Login</NavLink>
            </li>
            <li className="menu_social_icons">
              
                <p>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-instagram"></i>
                </p>
              
            </li>
          </ul>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default MobileMenu;
