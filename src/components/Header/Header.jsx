import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header-container">
      <div className="header-items">
        <div className="home-nav">
          <nav className="home-item">
            <Link
              to="/home"
              className={isActive("/home") || isActive("/") ? "active-link" : ""}
            >
              <i className="fa-solid fa-house mobile"></i>
              <span className="desktop">Inicio</span>
            </Link>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <nav className={`views-items ${menuOpen ? "open" : ""}`}>
          <Link
            to="/frontend-pj"
            className={isActive("/frontend-pj") ? "active-link" : ""}
          >
            Frontend
          </Link>
          <Link
            to="/2d-games"
            className={isActive("/2d-games") ? "active-link" : ""}
          >
            Juegos 2D
          </Link>
          <Link
            to="/3d-games"
            className={isActive("/3d-games") ? "active-link" : ""}
          >
            Juegos 3D
          </Link>
          <Link
            to="/vr-mob-games"
            className={isActive("/vr-mob-games") ? "active-link" : ""}
          >
            Juegos VR y Mobile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
