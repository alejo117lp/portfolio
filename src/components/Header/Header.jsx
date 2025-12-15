import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navItems = [
  { to: "/home", label: "Inicio", icon: "fa-solid fa-house" },
  { to: "/frontend-pj", label: "Frontend", icon: "fa-solid fa-laptop-code" },
  { to: "/2d-games", label: "Juegos 2D", icon: "fa-solid fa-gamepad" },
  { to: "/3d-games", label: "Juegos 3D", icon: "fa-solid fa-cube" },
  {
    to: "/vr-mob-games",
    label: "VR / Mobile",
    icon: "fa-solid fa-vr-cardboard",
  },
];

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/home" && (location.pathname === "/" || location.pathname === ""));

  useEffect(() => {
    // Cierra el menú móvil al cambiar de ruta
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`app-sidebar ${
        isMobileMenuOpen ? "app-sidebar--mobile-open" : ""
      }`}
    >
      <div className="app-sidebar__logo">
        <Link to="/home" aria-label="Volver al inicio">
          <span className="app-sidebar__logo-text">A</span>
        </Link>
      </div>

      <button
        type="button"
        className="app-sidebar__toggle"
        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMobileMenuOpen}
        onClick={handleToggle}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      <nav
        className={`app-sidebar__nav ${
          isMobileMenuOpen ? "app-sidebar__nav--open" : ""
        }`}
        aria-label="Navegación principal"
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`app-sidebar__link ${
              isActive(item.to) ? "app-sidebar__link--active" : ""
            }`}
          >
            <i className={item.icon} aria-hidden="true"></i>
            <span className="app-sidebar__label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="app-sidebar__footer">
        <span className="app-sidebar__initials">Alejo</span>
      </div>
    </header>
  );
};

export default Header;
