import React from 'react';

// Creates the table that lists the items added to cart
const ShoppingCart = ({ cart, increaseQuantity, removeFromCart }) => {
  return (
    <div className='shopping-cart-container'>
      <h2 className='shopping-cart-title'>Shopping Cart</h2>
      <table className='cart-item-list'>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Color</th>
            <th>Size</th>
            <th>Add/Delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className='cart-item'>
              <td className='item-details'>{item.itemName}</td>
              <td className='item-details'>{item.quantity}</td>
              <td className='item-details'>{item.color}</td>
              <td className='item-details'>{item.size}</td>
              <td className='cart-buttons'>
                <button onClick={() => increaseQuantity(index)}>Increase Quantity</button>
                <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;

