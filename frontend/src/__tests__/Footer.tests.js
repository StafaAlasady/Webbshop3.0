import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../Components/Footer/Footer';

describe('Footer component', () => {
  test('renders footer content correctly', () => {
    const { getByText, getByAltText, getByPlaceholderText } = render(<Footer />);

    // Check if the logo is rendered
    const logo = getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    // Check if the text content is rendered
    expect(getByText('Unleash your imagination and discover boundless artistic possibilities through our AI-powered platform.')).toBeInTheDocument();

    // Check if office address is rendered
    expect(getByText('Avenida Óscar, 6, 6º A')).toBeInTheDocument();
    expect(getByText('Illes Balears, Feliciano Baja')).toBeInTheDocument();
    expect(getByText('zip code:17177, Spain')).toBeInTheDocument();
    expect(getByText('AI.Art@outlook.com')).toBeInTheDocument();
    expect(getByText('+34 - 0123456789')).toBeInTheDocument();

    // Check if links are rendered
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Explore')).toBeInTheDocument();
    expect(getByText('MarketPlace')).toBeInTheDocument();
    expect(getByText('Contact Us')).toBeInTheDocument();

    // Check if newsletter form is rendered
    expect(getByPlaceholderText('Enter your email')).toBeInTheDocument();

    // Check if social icons are rendered
    expect(document.querySelectorAll('.social-icons .ico')).toHaveLength(5);

    // Check if copyright text is rendered
    expect(getByText('© PixelProAi. All rights reserved 2024.')).toBeInTheDocument();
  });
});