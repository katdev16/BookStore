import { useParams, useNavigate } from 'react-router-dom';
import the_amazon_book_list from '../assets/the_amazon_book_list.json';
import backIcon from "../assets/arrow_back_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";

function book() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  console.log("Book ID from URL:", bookId);
  console.log("Book List sample:", the_amazon_book_list[0]);
  console.log("Book List length:", the_amazon_book_list.length);
  
  const book = the_amazon_book_list.find(b => String(b._id) === String(bookId));
  console.log("Book Details:", book);
  console.log("All book IDs:", the_amazon_book_list.map(b => b._id));
  
  if (!book) return <div>Book not found. Looking for: {bookId}</div>;
  
  return (
    <>
  <div className="w-30 flex items-center gap-4 p-4 cursor-pointer" onClick={() => navigate('/')}> 
        <img src={backIcon} alt="Back" className="w-6 h-6 cursor-pointer"/>
        <h1>Back</h1>
    </div>
    <div className='flex flex-col justify-center items-center p-10 text-black'>
      
      <img src={book.thumbnailUrl} alt={book.title} />
      <h1>{book.title}</h1>
      <p>Category: {book.categories}</p>
      <p>Authors: {book.authors.join(', ')}</p>
      <p className='mt-5 p-5 '>{book.longDescription}</p>
    </div>
    </>
  );
}

export default book;