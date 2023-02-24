import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  test('renders the Home component', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Teste/i);
    expect(linkElement).toBeInTheDocument();
  });
});
