import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShopContext } from '../Context-api/ShopContext'; // Import your ShopContext here
import { CartItems } from '../Components/CartItems/CartItems';


describe('CartItems component', () => {
    test('renders cart items correctly', () => {
      const all_product = [
        { id: 1, name: 'Product 1', image: 'product1.jpg', new_price: 20 },
        { id: 2, name: 'Product 2', image: 'product2.jpg', new_price: 30 }
      ];
      const cartItems = { 1: 2, 2: 3 }; // Sample cart items
      const getTotalCartAmmount = jest.fn().mockReturnValue('Sample total'); // Sample total amount
      const removeFromCart = jest.fn(); // Mock remove function
  
      render(
        <ShopContext.Provider value={{ getTotalCartAmmount, all_product, cartItems, removeFromCart }}>
          <CartItems />
        </ShopContext.Provider>
      );
  
      // Check if cart items are rendered correctly
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
  
    });
  
    test('calls removeFromCart when remove button is clicked', () => {
      const all_product = [
        { id: 1, name: 'Product 1', image: 'product1.jpg', new_price: 20 },
        { id: 2, name: 'Product 2', image: 'product2.jpg', new_price: 30 }
      ];
      const cartItems = { 1: 2, 2: 3 }; // Sample cart items
      const getTotalCartAmmount = jest.fn().mockReturnValue('Sample total'); // Sample total amount
      const removeFromCart = jest.fn(); // Mock remove function
  
      render(
        <ShopContext.Provider value={{ getTotalCartAmmount, all_product, cartItems, removeFromCart }}>
          <CartItems />
        </ShopContext.Provider>
      );

    });
  });