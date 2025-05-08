import { render, screen, fireEvent } from '@testing-library/react';
import Checkout from './Checkout';

describe('Checkout Component', () => {
  it('should submit the order', () => {
    const mockOnSubmitOrder = jest.fn();
    render(<Checkout onSubmitOrder={mockOnSubmitOrder} />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St' } });

    fireEvent.submit(screen.getByRole('form'));

    expect(mockOnSubmitOrder).toHaveBeenCalledWith({
      name: 'John Doe',
      address: '123 Main St',
    });
  });
});
