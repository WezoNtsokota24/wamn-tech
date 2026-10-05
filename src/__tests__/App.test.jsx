import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Wamn Tech landing page without crashing', () => {
  render(<App />);
  // Navbar branding (using getAllByText because it appears multiple times)
  const branding = screen.getAllByText(/Wamn Tech/i);
  expect(branding.length).toBeGreaterThan(0);
  // Hero section - match the actual text "Enterprise Technology"
  expect(screen.getByText(/Enterprise Technology/i)).toBeInTheDocument();
});
