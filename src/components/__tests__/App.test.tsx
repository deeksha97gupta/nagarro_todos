import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { ThemeProvider } from '../../utils/ThemeContext';

test('should renders Todos Text', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const todoText = screen.getByText("Todos");
  expect(todoText).toBeInTheDocument();
});
