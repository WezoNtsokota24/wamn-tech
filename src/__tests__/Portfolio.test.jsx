import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Portfolio from '../components/Portfolio';
import '@testing-library/jest-dom';

describe('Portfolio Component', () => {
  test('renders all four case studies', () => {
    render(<Portfolio />);

    expect(screen.getByText('iCure Clinic')).toBeInTheDocument();
    expect(screen.getByText('Phillips Burial Society')).toBeInTheDocument();
    expect(screen.getByText('The Law-baller App')).toBeInTheDocument();
    expect(screen.getByText('Job Scraping & Gig Bot')).toBeInTheDocument();
  });

  test('renders correct tech stack badges for each project', () => {
    render(<Portfolio />);

    // iCure Clinic
    expect(screen.getByText('WEB APP')).toBeInTheDocument();
    expect(screen.getByText('FULL-STACK')).toBeInTheDocument();
    expect(screen.getByText('UX ARCHITECTURE')).toBeInTheDocument();

    // Phillips Burial Society
    expect(screen.getByText('FLUTTER')).toBeInTheDocument();
    expect(screen.getByText('DART')).toBeInTheDocument();
    expect(screen.getAllByText('SQLITE').length).toBe(2);

    // Law-baller
    expect(screen.getByText('DJANGO REST FRAMEWORK')).toBeInTheDocument();
    expect(screen.getByText('REACT/VITE')).toBeInTheDocument();
    expect(screen.getByText('POSTGRESQL')).toBeInTheDocument();

    // Job Scraping
    expect(screen.getByText('PYTHON')).toBeInTheDocument();
    expect(screen.getByText('PLAYWRIGHT / BS4')).toBeInTheDocument();
    // SQLITE is already checked above
  });

  test('opens architecture modal when clicking View Architecture', () => {
    render(<Portfolio />);

    const viewButtons = screen.getAllByText('View Architecture');
    fireEvent.click(viewButtons[0]); // Click iCure Clinic

    expect(screen.getByText('Architectural Overview')).toBeInTheDocument();
    expect(screen.getByText(/A comprehensive digital transformation/i)).toBeInTheDocument();

    const closeButton = screen.getByText('Close Blueprint');
    fireEvent.click(closeButton);

    expect(screen.queryByText('Architectural Overview')).not.toBeInTheDocument();
  });
});
