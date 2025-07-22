const Pagination = ({ next, previous, onPageChange }) => {
    return (
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={!previous}
          onClick={() => onPageChange(previous)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition 
            ${previous ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Previous
        </button>
        <button
          disabled={!next}
          onClick={() => onPageChange(next)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition 
            ${next ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  