import React from "react";
import { Link } from 'react-router-dom';
import '../header/Header.css';

const Header = () => {
  return(
    <header className="header-container">
      <div className="header-items">
        <div className="home-item">
          <Link to="/home">Inicio</Link>
        </div>
        <div className="views-items">
          <Link to="/frontend-pj">Front-End</Link>
          <Link to="/2d-games">Juegos 2D</Link>
          <Link to="/3d-games">Juegos 3D</Link>
          <Link to="/vr-mob-games">Juegos VR y Mobile</Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
