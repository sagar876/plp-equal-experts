import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders store header and cart', () => {
  render(<App />);
  expect(screen.getByRole('img', { name: /Equal Experts Store/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument();
});
