import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

/**
 * Navbar Component Tests
 *
 * Purpose: To ensure the Navbar component maintains its responsive behavior
 * and critical Tailwind CSS classes are present to prevent purging issues.
 */
describe('Navbar Responsive Classes', () => {
  test('renders desktop navigation links with correct responsive Tailwind classes', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // 1. Check Desktop Navigation Links Container
    // In Navbar.jsx, the desktop links are in a div with className="hidden md:flex items-center gap-8"
    // We can find it by looking for the container that contains the nav links
    const solutionsLink = screen.getByText(/Solutions/i);
    const desktopContainer = solutionsLink.closest('.md\\:flex');

    expect(desktopContainer).toBeInTheDocument();
    expect(desktopContainer).toHaveClass('hidden');
    expect(desktopContainer).toHaveClass('md:flex');

    // 2. Check Desktop CTA Container
    // There's another container for CLIENT LOGIN and GET STARTED: className="hidden md:flex items-center gap-6"
    const clientLoginLink = screen.getByText(/CLIENT LOGIN/i);
    const ctaContainer = clientLoginLink.closest('.md\\:flex');

    expect(ctaContainer).toBeInTheDocument();
    expect(ctaContainer).toHaveClass('hidden');
    expect(ctaContainer).toHaveClass('md:flex');

    // 3. Check Mobile Menu Toggle Button
    // className="flex md:hidden text-white"
    const mobileButton = screen.getByRole('button');
    expect(mobileButton).toHaveClass('flex');
    expect(mobileButton).toHaveClass('md:hidden');
  });
});
