import React, { useState } from "react";

import Moon from "../constants/Icons/Moon";
import Sun from "../constants/Icons/Sun";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div id="darkModeButton" onClick={handleClick}>
      {darkMode ? <Sun /> : <Moon />}
    </div>
  );
}

export default DarkModeButton;
