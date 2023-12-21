import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../form';

test('Form renders correctly and handles submission', () => {
  const mockAddToCart = jest.fn();
  render(<Form addToCart={mockAddToCart} />);
  
  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Item Name/i), { target: { value: 'Sample Item' } });
  fireEvent.change(screen.getByLabelText(/Quantity/i), { target: { value: '3' } });
  fireEvent.change(screen.getByLabelText(/Size/i), { target: { value: 'Medium' } });
  fireEvent.change(screen.getByLabelText(/Color/i), { target: { value: 'Blue' } });
  
  fireEvent.submit(screen.getByText(/Add to Cart/i));
  
  // Check if addToCart was called with the correct arguments
  expect(mockAddToCart).toHaveBeenCalledWith({
    itemName: 'Sample Item',
    quantity: 3,
    size: 'Medium',
    color: 'Blue'
  });
});
