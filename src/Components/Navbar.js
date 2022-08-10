import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">HOME</Link>
      </h2>
      <h2>
        <Link to="/catalogue">CATALOGUE</Link>
      </h2>
    </nav>
  );
}

export default Navbar;
