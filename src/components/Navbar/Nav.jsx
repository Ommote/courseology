import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div>
      <div className="nav-bar">
        <nav>
          <h2>courseology</h2>
          <ul>
            <li>about</li>
            <li>testimonials</li>
            <li>blog</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
