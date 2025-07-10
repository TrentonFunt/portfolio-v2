import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/work" className="nav-link">Work<sup>®</sup></NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;