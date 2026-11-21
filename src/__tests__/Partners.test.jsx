import React from 'react';
import { render, screen } from '@testing-library/react';
import Partners from '../components/Partners';
import '@testing-library/jest-dom';

describe('Partners Component', () => {
  test('renders the section title', () => {
    render(<Partners />);
    expect(screen.getByText(/TRUSTED BY INNOVATIVE BRANDS & INSTITUTIONS/i)).toBeInTheDocument();
  });

  test('renders partner names correctly (with duplication for marquee)', () => {
    render(<Partners />);

    // We expect 2 of each partner due to the duplication for seamless loop
    const pbsItems = screen.getAllByText(/PBS TOMBSTONE FACTORY/i);
    const wealthyHomeItems = screen.getAllByText(/Wealthy Home/i);
    const geoTronixItems = screen.getAllByText(/GeoTronix/i);
    const dasTechItems = screen.getAllByText(/Das Tech/i);

    expect(pbsItems.length).toBe(2);
    expect(wealthyHomeItems.length).toBe(2);
    expect(geoTronixItems.length).toBe(2);
    expect(dasTechItems.length).toBe(2);
  });

  test('has marquee animation classes', () => {
    render(<Partners />);
    const marqueeContainer = screen.getAllByText(/PBS TOMBSTONE FACTORY/i)[0].parentElement;
    expect(marqueeContainer).toHaveClass('animate-marquee');
    expect(marqueeContainer).toHaveClass('hover:[animation-play-state:paused]');
    expect(marqueeContainer).toHaveClass('motion-reduce:animate-none');
  });
});
