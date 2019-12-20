import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders React challenge paragraph', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React challenge/i);
  expect(linkElement).toBeInTheDocument();
});
