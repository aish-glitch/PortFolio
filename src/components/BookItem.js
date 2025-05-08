import React from 'react';
import './BookItem.css';

const BookItem = ({ book, onAddToCart }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <button onClick={() => onAddToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookItem;
