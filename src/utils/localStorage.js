const KEY = 'wishlist_books';

export const getWishlist = () => JSON.parse(localStorage.getItem(KEY)) || [];

export const toggleWishlist = (book) => {
  const list = getWishlist();
  const exists = list.find(b => b.id === book.id);
  const updated = exists
    ? list.filter(b => b.id !== book.id)
    : [...list, book];
  localStorage.setItem(KEY, JSON.stringify(updated));
};

export const isWishlisted = (id) => {
  return getWishlist().some(b => b.id === id);
};
