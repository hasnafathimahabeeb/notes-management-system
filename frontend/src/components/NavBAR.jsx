import "../styles/navbar.css";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>📝 Notes Management</h2>

      <div className="nav-right">
        <ThemeToggle />

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;