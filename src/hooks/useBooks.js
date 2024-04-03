import { useState, useEffect } from 'react';
import axios from 'axios';

const useBooks = (searchTerm) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`https://dev.iqrakitab.net/api/books`);
        setBooks(result.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
};

export default useBooks;
