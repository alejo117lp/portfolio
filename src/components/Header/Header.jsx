import React from "react";
import '../header/Header.css';

const Header = () => {
  return(
    <header className="header-container">
      <div className="header-items">
        <div className="home-item">
          <a href="">Home</a>
        </div>
        <div className="views-items">
          <a href="">Front-End</a>
          <a href="">Juegos 2D</a>
          <a href="">Juegos 3D</a>
          <a href="">Juegos VR y Mobile</a>
        </div>
      </div>
    </header>
  )
};

export default Header;
