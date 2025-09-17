import React, { useCallback, useState } from "react";
import { useTheme } from '../../utils/useTheme';

interface Props {
  onAdd: (text: string) => void;
  onSearch: (searchText: string) => void;
}

export default function AddTodo({ onAdd, onSearch }: Props) {
   const { theme } = useTheme()
  const [inputValue, setInputValue] = useState("");

  const submit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value) return;
    onAdd(value);
    setInputValue("");
  }, [inputValue, onAdd]);

  return (
    <form onSubmit={submit} className="add-form" aria-label="Add todo">
      <label htmlFor="todo-input" className="label-text">Add Todo</label>
      <input
        id="todo-input"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Add a todo"
        aria-label="Todo text"
      />
      <button 
        type="submit"
        aria-label="Add todo"
        className={theme === "light" ? "light-button" : "dark-button"}
      >
        Add
      </button>

      <label htmlFor="todo-search" className="label-text">Search Todos</label>
      <input
        id="todo-search"
        type="search"
        onChange={e => onSearch(e.target.value)}
        placeholder="Search..."
        aria-label="Search todos"
      />
    </form>
  );
}
