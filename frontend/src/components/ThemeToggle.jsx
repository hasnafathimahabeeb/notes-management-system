import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-btn"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;