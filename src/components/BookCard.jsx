import { Link } from 'react-router-dom';

const BookCard = ({ book, isWishlisted, onWishlistToggle }) => {
  const coverImage = book.formats['image/jpeg'];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
      <img
        src={coverImage}
        alt={book.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Author:</span>{' '}
          {book.authors?.[0]?.name || 'Unknown Author'}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Genre:</span>{' '}
          {book.subjects?.[0] || 'N/A'}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-medium">ID:</span> {book.id}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2 border-t">
          <Link
            to={`/book/${book.id}`}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Details
          </Link>
          <button
            onClick={() => onWishlistToggle(book)}
            className="text-xl focus:outline-none"
            title="Toggle Wishlist"
          >
            {isWishlisted(book.id) ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
