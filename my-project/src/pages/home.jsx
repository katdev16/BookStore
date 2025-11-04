import React from 'react'

export const Home = () => {
  return (
    <>
      <button className="bg-black text-white text-2xl w-full h-40">Add book</button>
      <div className="border p-2 flex justify-center items-center">
        <div className='search'>
            <input type="text" placeholder="Search books..." className="border border-black p-2 rounded-l-lg" />
            <button className="border border-black bg-black text-white p-2 rounded-r-lg">Search</button>
        </div>
        <div className='bg-black text-white p-2 rounded-xl'>All books</div>
      </div>
    </>
  )
}
export default Home
