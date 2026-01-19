import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      title={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      <div className="theme-toggle__icon-wrapper">
        {theme === 'dark' ? (
          <i className="fa-solid fa-sun" aria-hidden="true"></i>
        ) : (
          <i className="fa-solid fa-moon" aria-hidden="true"></i>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;

