const SearchBar = ({ value, onChange }) => {
    return (
      <div className="mb-4 w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search books by title..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     transition duration-150"
          aria-label="Search books by title"
        />
      </div>
    );
  };
  
  export default SearchBar;
  