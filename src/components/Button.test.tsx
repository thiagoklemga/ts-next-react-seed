import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  test('renders the Home component', () => {
    render(<Button />);
    const linkElement = screen.getByText(/Teste/i);
    expect(linkElement).toBeInTheDocument();
  });
});
