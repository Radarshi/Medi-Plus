import { Link } from "react-router-dom"; // ✅ Use Link instead of <a> for React routing
import dark_toggle from "../assets/dark_toggle.png";
import light_toggle from "../assets/light_toggle.jpg";
import med_logo from "../assets/med_logo.png";
import "../Styles/navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <img className="logo" src={med_logo} alt="Medical Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/appointment">Book an Appointment</Link></li>
        <li><Link to="/lab-tests">Lab Tests</Link></li>
        <li><Link to="/health-blogs">Health Blogs</Link></li>
      </ul>

      {/* Theme Toggle Button */}
      <img
        onClick={toggleMode}
        src={theme === "light" ? dark_toggle : light_toggle}
        alt="Toggle Theme"
        className="toggle"
      />
    </nav>
  );
};

export default Navbar;
