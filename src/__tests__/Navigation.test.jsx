import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

/**
 * Navigation Integration Tests
 *
 * Purpose: To ensure that all main navigation links in the Navbar correctly
 * route the user to the intended pages and render the appropriate content.
 *
 * Components Covered:
 * - App (Rendering and Routing)
 * - Navbar (Navigation links)
 * - Home, ServicesPage (Solutions), Methodology (Process), Company (Leadership),
 *   ContactPage, and ClientPortal pages.
 *
 * Key Verifications:
 * 1. Default route loads the Home page.
 * 2. "Solutions" link navigates to the Services page.
 * 3. "Process" link navigates to the Methodology page.
 * 4. "Leadership" link navigates to the Company page.
 * 5. "Contact" link navigates to the Contact page.
 * 6. "CLIENT LOGIN" link navigates to the Client Portal.
 */
describe('Navigation Integration Tests', () => {
  test('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Architecting/i)).toBeInTheDocument();
    // Use getAllByText and check if at least one is present to avoid "multiple elements" error
    expect(screen.getAllByText(/Solutions/i).length).toBeGreaterThan(0);
  });

  test('navigates to solutions page when clicking Solutions in Navbar', () => {
    render(<App />);

    // Find the link in the desktop Navbar
    const solutionsLink = screen.getAllByRole('link', { name: /Solutions/i })[0];
    fireEvent.click(solutionsLink);

    // Verify we are on the solutions page by checking for content from Services component
    expect(screen.getByText(/Core Capabilities/i)).toBeInTheDocument();
    expect(screen.getByText(/Custom Software Development/i)).toBeInTheDocument();
  });

  test('navigates to process page when clicking Process in Navbar', () => {
    render(<App />);

    const processLink = screen.getAllByRole('link', { name: /Process/i })[0];
    fireEvent.click(processLink);

    expect(screen.getByText(/Our Process/i)).toBeInTheDocument();
    expect(screen.getByText(/What Makes Us Different/i)).toBeInTheDocument();
  });

  test('navigates to leadership page when clicking Leadership in Navbar', () => {
    render(<App />);

    const leadershipLink = screen.getAllByRole('link', { name: /Leadership/i })[0];
    fireEvent.click(leadershipLink);

    expect(screen.getByText(/Enterprise Leadership/i)).toBeInTheDocument();
    expect(screen.getByText(/Wezo Ntsokota/i)).toBeInTheDocument();
  });

  test('navigates to contact page when clicking Contact in Navbar', () => {
    render(<App />);

    const contactLink = screen.getAllByRole('link', { name: /Contact/i })[0];
    fireEvent.click(contactLink);

    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });

  test('navigates to client portal when clicking Client Login in Navbar', () => {
    render(<App />);

    const portalLink = screen.getByText(/CLIENT LOGIN/i);
    fireEvent.click(portalLink);

    expect(screen.getByText(/Access your managed services workspace/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In to Workspace/i)).toBeInTheDocument();
  });
});
