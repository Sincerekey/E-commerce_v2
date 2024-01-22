import React from 'react';

function CartComponet({ cart }) {
  // Use cart data within the component
  const cartItems = cart ? cart.items : [];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartComponet;
