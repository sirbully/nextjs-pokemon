import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { useGetPokemon } from '@/hooks/useGetPokemon';
import Dashboard from '@/pages/dashboard';

jest.mock('@/hooks/useGetPokemon.tsx', () => ({
  useGetPokemon: jest.fn(),
}));

describe('Dashboard Page', () => {
  beforeEach(() => {
    (useGetPokemon as jest.Mock).mockImplementation(() => ({}));
  });

  it('should render pokemon cards', async () => {
    render(<Dashboard />);
    expect(useGetPokemon).toHaveReturned();
  });
});
