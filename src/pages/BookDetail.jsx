import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then(res => res.json())
      .then(setBook)
      .catch(console.error);
  }, [id]);

  if (!book)
    return (
      <p className="text-center text-gray-600 mt-10">Loading book details...</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={book.formats['image/jpeg']}
          alt={book.title}
          className="w-full md:w-1/3 object-cover rounded-md shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Author:</span>{' '}
            {book.authors?.[0]?.name || 'Unknown'}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Subjects:</span>{' '}
            {book.subjects?.join(', ') || 'N/A'}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">ID:</span> {book.id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
