import './App.css';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Use fake timers
  jest.useFakeTimers();

  // Render your component
  render(<App />);
  
  // Assuming there's a link with the text 'learn react'
  const linkElement = screen.getByText(/learn react/i);

  // Advance the timer by 100ms (assuming your App component has some async behavior)
  jest.advanceTimersByTime(100);

  // Assert that the link is in the document
  expect(linkElement).toBeInTheDocument();
});
