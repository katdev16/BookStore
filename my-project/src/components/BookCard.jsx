import React, { useState } from 'react'
import the_amazon_book_list from '../assets/the_amazon_book_list.json'





// build and export the initial read-statuses object so other modules can import it
const initial = (() => {
  const obj = {};
  the_amazon_book_list.forEach((b) => {
    obj[b._id] = 'Unread';
  });
  return obj;
})();

export { initial };


const BookCard = ({ books, readStatuses, markAsRead }) => {
  return (
    <>
      {books.map((book) => (
        <div key={book._id} className="flex flex-col justify-center p-4 rounded-lg shadow-md w-80 h-96 bg-grey text-black hover:scale-105 transition-transform duration-200" >
          <div className="mb-4">
            <img src={book.thumbnailUrl} alt={book.title} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600">Category: {book.categories}</p>
          </div>
          <button
            onClick={() => markAsRead(book._id)}
            className={`h-20 flex items-center justify-center text-white ${readStatuses[book._id] === 'Read' ? 'bg-green-700' : 'bg-red-800'}`}
          >
            <p>{readStatuses[book._id] || 'Unread'}</p>
          </button>
        </div>
      ))}
    </>
  );
}

export default BookCard     
