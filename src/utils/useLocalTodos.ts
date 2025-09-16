import { useCallback, useEffect, useState } from "react";
import { Todo } from "../components/todos/types";

const STORAGE_KEY = "todos_v1";

export default function useLocalTodos() {
  const [storageError, setStorageError] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) as Todo[] : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.error("LocalStorage failed:", err);
      setStorageError(true);
    }
  }, [todos]);

  const add = useCallback((text: string) => {
    const t: Todo = {
      id: Math.random().toString(36).slice(2, 9),
      text,
      completed: false
    };
    setTodos(prev => [t, ...prev]);
  }, []);

  const edit = useCallback((id: string, text: string) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, text: text } : t));
  }, []);

  const toggle = useCallback((id: string) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }, []);

  const remove = useCallback((id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);

  return { todos, add, edit, toggle, remove, setTodos, storageError };
}
