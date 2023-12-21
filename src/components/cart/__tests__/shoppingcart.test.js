import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from '../shoppingcart';

test('ShoppingCart renders correctly', () => {
  render(<ShoppingCart cart={[]} increaseQuantity={() => {}} removeFromCart={() => {}} />);
  const shoppingCartTitle = screen.getByText(/Shopping Cart/i);
  expect(shoppingCartTitle).toBeInTheDocument();
});
