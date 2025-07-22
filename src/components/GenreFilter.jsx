const GenreFilter = ({ genres, selected, onSelect }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Genre
        </label>
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="block w-full md:w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Genres</option>
          {genres.map((g, idx) => (
            <option key={idx} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default GenreFilter;
  