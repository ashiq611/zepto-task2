import { useEffect, useState } from 'react';
import { fetchBooks } from '../utils/api';
import { toggleWishlist, isWishlisted } from '../utils/localStorage';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { useDebounce } from '../hooks/useDebounce';

// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value);
//   useEffect(() => {
//     const handler = setTimeout(() => setDebouncedValue(value), delay);
//     return () => clearTimeout(handler);
//   }, [value, delay]);
//   return debouncedValue;
// }

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500); 

  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadBooks = async (url = null) => {
    setLoading(true);
    try {
      const data = await fetchBooks(debouncedSearch, url);
      setBooks(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (err) {
      console.error('Failed to fetch books:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, [debouncedSearch]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SearchBar value={search} onChange={setSearch} />
      {loading ? (
        <p className="text-center text-gray-600 mt-10">Loading books...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map(book => (
              <BookCard
                key={book.id}
                book={book}
                isWishlisted={isWishlisted}
                onWishlistToggle={(book) => {
                  toggleWishlist(book);
                  setBooks([...books]);
                }}
              />
            ))}
          </div>
          <Pagination next={nextPage} previous={prevPage} onPageChange={loadBooks} />
        </>
      )}
    </div>
  );
};

export default Home;
