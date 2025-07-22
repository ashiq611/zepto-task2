import { useState, useEffect } from 'react';
import { getWishlist, toggleWishlist, isWishlisted } from '../utils/localStorage';
import BookCard from '../components/BookCard';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleToggle = (book) => {
    toggleWishlist(book);
    setWishlist(getWishlist());
  };

  if (wishlist.length === 0) {
    return (
      <p className="text-center text-gray-600 mt-10">
        Your wishlist is empty. Start adding some favorite books!
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map(book => (
          <BookCard
            key={book.id}
            book={book}
            isWishlisted={isWishlisted}
            onWishlistToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
