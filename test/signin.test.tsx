import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import Signin from '@/pages/signin';

describe('Signin Page', () => {
  it('should render expected elements in the document', () => {
    render(<Signin />);
    expect(
      screen.getByRole('heading', { name: 'Pokemon Next!' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Sign in/i }),
    ).toBeInTheDocument();
  });

  it('should validate form fields', async () => {
    render(<Signin />);
    fireEvent.submit(screen.getByRole('button', { name: /Sign in/i }));
    expect(await screen.findAllByRole("alert")).toHaveLength(2);
  });
});
