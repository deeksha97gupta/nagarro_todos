import React, { useState, JSX, useMemo } from "react";
import useLocalTodos from "../../utils/useLocalTodos";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
// import { Todo } from "./types";

export default function TodoApp() : JSX.Element {
  const { todos, add, toggle, remove, edit } = useLocalTodos();
  const [searchInput, setSearchInput] = useState("");
//   const [filteredTodo, setfilteredTodo] = useState<Todo[]>([])


// Can also use useEffect AND setTimeout for debaouncing (But that is good for large list or some Api call)

/*useEffect(() => {
    let timer = setTimeout(() => {
        const searchInputValue = searchInput.trim().toLowerCase();
        const updatedTodo = todos.filter(
            (todo: any) => todo.text.toLowerCase().includes(searchInputValue)
        );
        setfilteredTodo(updatedTodo);
   }, 500)
   return () => {
    clearTimeout(timer);
   }
 }, [todos, searchInput])
 */


  const filtered = useMemo(() => {
    const searchInputValue = searchInput.trim().toLowerCase();
    if (!searchInputValue) return todos;
    return todos.filter(t => t.text.toLowerCase().includes(searchInputValue));
  }, [todos, searchInput]);


  return (
    <section aria-labelledby="todos-heading" className="todo-app" >
      <AddTodo onAdd={add} onSearch={(value: string) => setSearchInput(value)} />
      <h2 id="todos-heading">Todo List</h2>
      <TodoList todos={filtered} onToggle={toggle} onRemove={remove} onEdit={edit} />
    </section>
  );
}
