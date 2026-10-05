import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../components/Contact';

// Mock fetch
global.fetch = jest.fn();

describe('Contact Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders form fields correctly', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  test('submits form data and shows success message', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({ success: true }),
    });

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Company/i), { target: { value: 'Test Co' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello world' } });

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    expect(screen.getByText(/Sending.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Thank you! Your message has been sent successfully/i)).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith('https://api.web3forms.com/submit', expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({
        access_key: '72beb498-8fda-4cd8-b588-12fbe6992b09',
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Co',
        message: 'Hello world'
      })
    }));

    // Form fields should be cleared
    expect(screen.getByLabelText(/Name/i).value).toBe('');
  });
});
