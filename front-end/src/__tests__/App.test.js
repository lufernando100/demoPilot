import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Flask API Response text', () => {
  render(<App />);
  const headingElement = screen.getByText(/Flask API Response/i);
  expect(headingElement).toBeInTheDocument();
});
