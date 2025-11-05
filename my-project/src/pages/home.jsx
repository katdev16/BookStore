import React from 'react'
import  BookCard  from '../components/BookCard.jsx'

export const Home = () => {
  return (
    <>
      <button className="bg-black text-white text-2xl w-full h-40">Add book</button>
      
      <div className="p-2 flex flex-wrap justify-end items-center gap-40">
        <div className='search'>
            <input type="text" placeholder="Search books..." className="border border-black p-2 rounded-l-lg" />
            <button className="border border-black bg-black text-white p-2 rounded-r-lg">Search</button>
        </div>
        <div className='bg-black text-white p-2 rounded-xl mr-30'>All books</div>
      </div>
      <div className='p-10 w-full flex flex-wrap justify-center items-center gap-10'>
        <BookCard />
      </div>

    </>
  )
}
export default Home
