import React from 'react';
import { render, screen } from '@testing-library/react';
import Outfits from '../outfits';

test('Outfits renders correctly', () => {
  render(<Outfits />);
  const outfitsTitle = screen.getByText(/Outfit Finder/i);
  const seasonSelect = screen.getByLabelText(/Select a Season/i);
  const getOutfitsButton = screen.getByText(/Get Outfits/i);

  expect(outfitsTitle).toBeInTheDocument();
  expect(seasonSelect).toBeInTheDocument();
  expect(getOutfitsButton).toBeInTheDocument();
});
