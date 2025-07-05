import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
  if (menuOpen) {
    // disparar animación de cierre antes de ocultar
    menuRef.current.classList.add("closing");
    menuRef.current.addEventListener(
      "animationend",
      () => {
        setMenuOpen(false);
        menuRef.current.classList.remove("closing");
      },
      { once: true }
    );
  } else {
    setMenuOpen(true);
  }
};

  useEffect(() => {
    function handleClickOutside(e) {
      // si el menú está abierto y el clic no es ni en el menú ni en el botón
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header-container">
      <div className="header-items">
        <div className="home-nav">
          <nav className="home-item">
            <Link
              to="/home"
              className={isActive("/home") || isActive("/") ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-house mobile"></i>
              <span className="desktop">Inicio</span>
            </Link>
          </nav>

          <button ref={btnRef} className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <nav className={`views-items ${menuOpen ? "open" : ""}`} ref={menuRef}>
          <Link
            to="/frontend-pj"
            className={isActive("/frontend-pj") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Frontend
          </Link>
          <Link
            to="/2d-games"
            className={isActive("/2d-games") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Juegos 2D
          </Link>
          <Link
            to="/3d-games"
            className={isActive("/3d-games") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Juegos 3D
          </Link>
          <Link
            to="/vr-mob-games"
            className={isActive("/vr-mob-games") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Juegos VR y Mobile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
