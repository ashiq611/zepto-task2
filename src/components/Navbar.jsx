import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">📚 Book Hub</Link>
        <div className="flex space-x-4">
          <Link to="/" className={linkClass('/')}>
            Home
          </Link>
          <Link to="/wishlist" className={linkClass('/wishlist')}>
            Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
