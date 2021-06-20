import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import Signup from '@/pages/signup';

describe('Signup Page', () => {
  it('should render expected elements in the document', () => {
    render(<Signup />);
    expect(
      screen.getByRole('heading', { name: 'Pokemon Next!' }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Sign up/i }),
    ).toBeInTheDocument();
  });

  it('should validate form fields', async () => {
    render(<Signup />);
    fireEvent.submit(screen.getByRole('button', { name: /Sign up/i }));
    expect(await screen.findAllByRole('alert')).toHaveLength(5);
  });
});
