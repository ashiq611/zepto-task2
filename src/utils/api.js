export const fetchBooks = async (search = '', fullURL = null) => {
    let url = fullURL || `https://gutendex.com/books?search=${search}`;
    const res = await fetch(url);
    return await res.json();
  };
  