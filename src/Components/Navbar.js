import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/catalogue">Catalogue</Link>
      </h2>
      <h2>
        <Link to="/favorites">Favorites</Link>
      </h2>
    </nav>
  );
}

export default Navbar;
