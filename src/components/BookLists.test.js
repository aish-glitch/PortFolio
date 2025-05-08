import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookList from './BookList';
import userEvent from '@testing-library/user-event';
import { fetchBooks } from '../services/api';

jest.mock('../services/api'); // Mock the API call

describe('BookList Component', () => {
  it('should display books', async () => {
    // Mock the API response
    fetchBooks.mockResolvedValue([
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10 },
      { id: 2, title: '1984', author: 'George Orwell', price: 15 },
    ]);

    render(<BookList onAddToCart={jest.fn()} />);

    // Wait for the books to be loaded
    await waitFor(() => screen.getByText('The Great Gatsby'));

    expect(screen.getByText('The Great Gatsby')).toBeInTheDocument();
    expect(screen.getByText('1984')).toBeInTheDocument();
  });

  it('should call onAddToCart when Add to Cart button is clicked', async () => {
    const mockOnAddToCart = jest.fn();

    fetchBooks.mockResolvedValue([
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10 },
    ]);

    render(<BookList onAddToCart={mockOnAddToCart} />);

    await waitFor(() => screen.getByText('The Great Gatsby'));

    userEvent.click(screen.getByText('Add to Cart'));

    expect(mockOnAddToCart).toHaveBeenCalledWith({
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10,
    });
  });
});
