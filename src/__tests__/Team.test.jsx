import React from 'react';
import { render, screen } from '@testing-library/react';
import Team from '../components/Team';

test('renders Team profiles correctly', () => {
  render(<Team />);

  // Verify names
  expect(screen.getByText(/Wezo Ntsokota/i)).toBeInTheDocument();
  expect(screen.getByText(/Asanda Magaga/i)).toBeInTheDocument();

  // Verify titles
  expect(screen.getByText(/Director \/ Co-founder \/ Software Developer/i)).toBeInTheDocument();
  expect(screen.getByText(/Director \/ Co-founder \/ Business Specialist/i)).toBeInTheDocument();

  // Verify images (using alt text)
  const images = screen.getAllByRole('img');
  expect(images).toHaveLength(2);
  expect(images[0]).toHaveAttribute('alt', 'Wezo Ntsokota');
  expect(images[1]).toHaveAttribute('alt', 'Asanda Magaga');
});
