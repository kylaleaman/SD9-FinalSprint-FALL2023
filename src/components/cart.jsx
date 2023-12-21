
import React, { useState } from 'react';
import Form from './cart/form';
import ShoppingCart from './cart/shoppingcart';
import './cart/cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  
  // add items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // increase the number of item in your cart
  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  //remove the items from the cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    // Adding the form and cart table to the cart page
    <div>
        <div className='form-container'>
            <img src='./images/beach.jpg' alt='Beach' className='beach-pic'/>
            <Form addToCart={addToCart} className='input-container'/>
        </div>

        <div>
            <ShoppingCart cart={cart} increaseQuantity={increaseQuantity} removeFromCart={removeFromCart} />
        </div>
    </div>
  );
};

export default Cart;
