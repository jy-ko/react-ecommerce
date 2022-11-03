import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign in text', () => {
  render(<App />);
  const text = screen.getByText(/SIGN IN/i);
  expect(text).toBeInTheDocument();
});

// test('renders buttons', () => {
//   render(<App />);
//   const buttons = screen.getAllByRole("button");
//   expect(buttons).toHaveLength(2);
// });

