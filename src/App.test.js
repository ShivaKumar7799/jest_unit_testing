import { render, screen } from '@testing-library/react';
import App from './App';
import ReactJest from './Components/ReactJest';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing Counter/i);
  expect(linkElement).toBeInTheDocument()
});

test("renders react jest component", () => {
  render( <ReactJest /> );
  const reactJestElement = screen.getByText(/ReactJest/i);
  expect(reactJestElement).toBeInTheDocument()
})
