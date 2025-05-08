import React from 'react';
import './BookLists.css';

const BookLists = ({ books, onAddToCart }) => {
  return (
    <div className="booklist-container">
      <h2>Available Books</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ₹{book.price}</p>
            <button onClick={() => onAddToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookLists;
