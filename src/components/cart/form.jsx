import React, { useState } from 'react';
import './cart.css';

// Creates the form that allows inputs to add to the cart
const Form = ({ addToCart }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(''); // New input for size
  const [color, setColor] = useState(''); // New input for color

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart({ itemName, quantity: parseInt(quantity, 10), size, color });
    setItemName('');
    setQuantity(1);
    setSize(''); // Clear size input after submission
    setColor(''); // Clear color input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='form-label'>
        Item Name:
        <input type="text" value={itemName} onChange={handleItemNameChange} className='form-input' />
      </label>
      <label className='form-label'>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} className='form-input' />
      </label>
      {/* New input for size */}
      <label className='form-label'>
        Size:
        <input type="text" value={size} onChange={handleSizeChange} className='form-input'/>
      </label>
      {/* New input for color */}
      <label className='form-label'>
        Color:
        <input type="text" value={color} onChange={handleColorChange} className='form-input'/>
      </label>
      <button type="submit" className='form-submit'>Add to Cart</button>
    </form>
  );
};

export default Form;

