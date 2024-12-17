import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  //Verificar si una ruta está activa
  const isActive = (path) => location.pathname === path;

  return(
    <header className="header-container">
      <div className="header-items">
        <nav className="home-item">
          <Link to="/home" className={isActive('/home') || isActive('/') ? 'active-link' : ''}>
            Inicio
          </Link>
        </nav>
        <nav className="views-items">
          <Link to="/frontend-pj" className={isActive('/frontend-pj') ? 'active-link' : ''}>Front-End</Link>
          <Link to="/2d-games" className={isActive('/2d-games') ? 'active-link' : ''}>Juegos 2D</Link>
          <Link to="/3d-games" className={isActive('/3d-games') ? 'active-link' : ''}>Juegos 3D</Link>
          <Link to="/vr-mob-games" className={isActive('/vr-mob-games') ? 'active-link' : ''}>Juegos VR y Mobile</Link>
        </nav>
      </div>
    </header>
  )
};

export default Header;
