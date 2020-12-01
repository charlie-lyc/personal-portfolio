import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item home">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item about">
            <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item profile">
            <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item contact">
            <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;