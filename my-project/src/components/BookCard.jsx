import React from 'react'
import the_amazon_book_list from '../assets/the_amazon_book_list.json'





const BookCard = () => {
  return (
    <>
    {the_amazon_book_list.map((book) => (
        <div className="flex flex-col justify-center p-4 rounded-lg shadow-md w-80 h-96 bg-grey text-black hover:scale-105 transition-transform duration-200" >
            <div key={book._id} className="mb-4">
                <img src={book.thumbnailUrl} alt={book.title} className="w-full h-48 object-cover mb-2" />
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-gray-600">Category: {book.categories}</p>
            </div>
            <div className='bg-red-800 h-20 flex items-center justify-center'><p>Unread</p></div>
        </div>
    ))}
    </>
  )
}

export default BookCard     
