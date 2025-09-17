import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/ThemeContext';
import AddTodo from '../todos/AddTodo';

test('should render Add Todo component with Add button', () => {
    const mockOnAdd = jest.fn();
    const mockOnSearch = jest.fn();
    render(
        <ThemeProvider>
            <AddTodo onAdd={mockOnAdd} onSearch={mockOnSearch}/>
        </ThemeProvider>
    );
    const addButton = screen.getByRole('button',{ name: 'Add todo' });
    //assertion
    expect(addButton).toBeInTheDocument();
});
