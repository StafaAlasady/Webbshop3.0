import { render, screen } from '@testing-library/react';
import { Footer } from './Components/Footer/Footer'; // Assuming this is the path to your Footer component

test('renders Footer component', () => {
  render(<Footer />);
  // Check if some specific form elements are present
  expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
});

test('renders footer logo', () => {
  render(<Footer />);
  const logo = screen.getByAltText('Logo');
  expect(logo).toBeInTheDocument();
});

test('renders office address', () => {
  render(<Footer />);
  const address = screen.getByText(/Avenida Óscar, 6, 6º A/i);
  expect(address).toBeInTheDocument();
});

test('renders email address', () => {
  render(<Footer />);
  const email = screen.getByText(/AI.Art@outlook.com/i);
  expect(email).toBeInTheDocument();
});
test('renders social media icons', () => {
  render(<Footer />);
  const facebookIcon = screen.getByAltText('Facebook');
  const twitterIcon = screen.getByAltText('Twitter');
  const instagramIcon = screen.getByAltText('Instagram');
  const pinterestIcon = screen.getByAltText('Pinterest');
  const whatsappIcon = screen.getByAltText('Whatsapp');
  expect(facebookIcon).toBeInTheDocument();
  expect(twitterIcon).toBeInTheDocument();
  expect(instagramIcon).toBeInTheDocument();
  expect(pinterestIcon).toBeInTheDocument();
  expect(whatsappIcon).toBeInTheDocument();
});

