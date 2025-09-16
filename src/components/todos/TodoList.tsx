import React from "react";
import { Todo } from "./types";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoList({ todos, onToggle, onRemove, onEdit }: Props) {
  if (todos.length === 0) {
    return <p role="status" aria-live="polite" className="empty">No todos</p>;
  }

  return (
    <ul className="todo-list" aria-live="polite">
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove} onEdit={onEdit}/>
      ))}
    </ul>
  );
}
