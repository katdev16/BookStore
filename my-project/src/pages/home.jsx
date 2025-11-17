import React from 'react';
import BookCard from '../components/bookcard.jsx';
import AddBook from './AddBook.jsx';
import the_amazon_book_list from '../assets/the_amazon_book_list.json';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
  const navigate = useNavigate();
  // Book statuses: { [bookId]: 'Read' | 'Unread' }
  const [readStatuses, setReadStatuses] = React.useState(() => {
    const obj = {};
    the_amazon_book_list.forEach((b) => {
      obj[b._id] = 'Unread';
    });
    return obj;
  });

  const [filterMode, setFilterMode] = React.useState('All');

  // Handler to toggle a book's read status
  const markAsRead = (bookId) => {
    setReadStatuses((prev) => ({
      ...prev,
      [bookId]: prev[bookId] === 'Unread' ? 'Read' : 'Unread',
    }));
  };

  // Filter books based on filterMode and readStatuses
  const filteredBooks = the_amazon_book_list.filter((book) => {
    if (filterMode === 'All') return true;
    return readStatuses[book._id] === filterMode;
  });

  // Handler to navigate to book detail page with bookId
  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };
    
  return (
      <>
      
      
      <button
        className="bg-black text-white text-2xl w-full h-40"
        onClick={() => navigate('/add-book')}
      >
        Add book
      </button>
      
      <div className="p-2 flex flex-wrap justify-end items-center gap-40">
        <div className='search'>
            <input type="text" placeholder="Search books..." className="border border-black p-2 rounded-l-lg" />
            <button className="border border-black bg-black text-white p-2 rounded-r-lg">Search</button>
        </div>
        <select
          value={filterMode}
          onChange={(e) => setFilterMode(e.target.value)}
          className={`p-2 rounded-xl mr-30 text-white bg-black`}
          aria-label="Filter books"
        >
          <option value="All">All books</option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>
      </div>
      <div className='p-10 w-full flex flex-wrap justify-center items-center gap-10'>
        <BookCard
          books={filteredBooks}
          readStatuses={readStatuses}
          markAsRead={markAsRead}
          onBookClick={handleBookClick}
        />
      </div>
      

    </>
  )
}
export default Home
