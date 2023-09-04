import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  isDarkMode
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark');

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''} w-8`}>
      <div className="toggle-container ">
        <button
          className={`${isDarkMode ? 'hidden' : ''}  rounded-full`}
          onClick={handleToggle}
          title="Light mode"
        >
          <img src="https://assets.codepen.io/210284/sun.png" alt="sun" />
        </button>
        <button
          className={`${isDarkMode ? '' : 'hidden'} bg-gray-800  rounded-full`}
          onClick={handleToggle}
          title="Dark mode"
        >
          <img src="https://assets.codepen.io/210284/moon.png" alt="moon" />
        </button>
      </div>
    </div>
  );
};

export default DarkModeToggle;
