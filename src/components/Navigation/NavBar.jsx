
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Website</div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
