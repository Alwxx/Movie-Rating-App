import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
 const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("app-theme");
    return savedTheme ? savedTheme : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

useEffect(() => {
    localStorage.setItem("app-theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
