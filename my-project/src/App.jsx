import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import AddBook from './pages/AddBook.jsx';
import Book from './pages/book.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book/:bookId" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
