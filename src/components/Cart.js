import React, { useState } from 'react';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>Price: ${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
                min="1"
              />
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
