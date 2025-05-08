import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';

describe('Cart Component', () => {
  const cartItems = [
    { id: 1, title: 'The Great Gatsby', price: 10, quantity: 1 },
    { id: 2, title: '1984', price: 15, quantity: 2 },
  ];

  it('should display cart items', () => {
    render(<Cart cartItems={cartItems} onUpdateQuantity={jest.fn()} onRemoveItem={jest.fn()} />);

    expect(screen.getByText('The Great Gatsby')).toBeInTheDocument();
    expect(screen.getByText('1984')).toBeInTheDocument();
  });

  it('should update quantity when input is changed', () => {
    const mockOnUpdateQuantity = jest.fn();
    render(<Cart cartItems={cartItems} onUpdateQuantity={mockOnUpdateQuantity} onRemoveItem={jest.fn()} />);

    fireEvent.change(screen.getByDisplayValue('1'), { target: { value: '2' } });

    expect(mockOnUpdateQuantity).toHaveBeenCalledWith(1, '2');
  });

  it('should remove item when remove button is clicked', () => {
    const mockOnRemoveItem = jest.fn();
    render(<Cart cartItems={cartItems} onUpdateQuantity={jest.fn()} onRemoveItem={mockOnRemoveItem} />);

    userEvent.click(screen.getAllByText('Remove')[0]);

    expect(mockOnRemoveItem).toHaveBeenCalledWith(1);
  });
});
