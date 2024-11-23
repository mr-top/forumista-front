import { createContext, useState, useEffect, useLayoutEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider (props) {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    document.querySelector('html').setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  function handleToggle(e){
    if (e.target.checked) {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }

  return (
    <ThemeContext.Provider value={{handleToggle, currentTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };