import React from 'react';
import { render, waitFor, screen,} from '@testing-library/react';
import { NewCollections } from '../Components/NewCollections/NewCollections';

describe('NewCollections component', () => {
    test('renders new collections correctly', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve([])
      });
  
      render(<NewCollections />);
  
      // Wait for the component to render
      await waitFor(() => {
        expect(screen.getByText('NEW COLLECTIONS')).toBeInTheDocument();
      });
  
        // Check if fetch was called with the correct URL
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/newcollections');

        // Check if fetch was called only once
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });