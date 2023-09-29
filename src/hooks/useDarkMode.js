import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || "dark"
  );

  const toggleDarkMode = () => {
    const newTheme = darkMode === "dark" ? "light" : "dark";
    localStorage.setItem("darkMode", newTheme);
    setDarkMode(newTheme);
    document.documentElement.setAttribute("dark-mode", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("dark-mode", darkMode);
  }, []);

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
