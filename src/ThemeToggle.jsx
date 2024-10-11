import React, { useState, useEffect } from "react";
import './index.css';


const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Apply theme
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <div className="theme-toggle-container">
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
};

export default ThemeToggle;
