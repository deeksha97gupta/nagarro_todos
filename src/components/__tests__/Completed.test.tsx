import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/ThemeContext';
import Completed from '../todos/Completed';

test('should renders Completed Text', () => {
  render(
    <ThemeProvider>
      <Completed />
    </ThemeProvider>
  );
  const completeText = screen.getByText("Completed List");
  expect(completeText).toBeInTheDocument();
});
