import React, { useEffect, useState } from 'react'

function Toggle() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode ? JSON.parse(storedDarkMode) : false);

  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    setToggle(!toggle);
  };
  return (
    <div
      className="w-12 h-6 flex items-center bg-blue-200 dark:bg-gray-400 rounded-full p-1 cursor-pointer"
      onClick={toggleDarkMode}
    >
      <div
        className={
          "bg-blue-600 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
          (toggle ? null : toggleClass)
        }
      ></div>
    </div>
  )
}

export default Toggle