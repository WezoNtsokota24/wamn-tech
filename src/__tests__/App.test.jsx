import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Wamn Tech landing page without crashing', () => {
  render(<App />);
  // Navbar branding
  const branding = screen.getAllByText(/WAMN/i);
  expect(branding.length).toBeGreaterThan(0);
  // Hero section
  expect(screen.getByText(/We become subject matter experts in your business before we write a single line of code/i)).toBeInTheDocument();
  // New components smoke check
  expect(screen.getByText(/Interactive Tech Stack Matrix/i)).toBeInTheDocument();
  expect(screen.getByText(/Project ROI Estimator/i)).toBeInTheDocument();
});
