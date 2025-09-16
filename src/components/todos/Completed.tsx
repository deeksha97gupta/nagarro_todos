import React, { useMemo, JSX } from 'react';
import useLocalTodos from '../../utils/useLocalTodos';

const Completed = (): JSX.Element => {
    const { todos } = useLocalTodos();
    const filtered = useMemo(() => {
        return todos.filter(t => t.completed);
      }, [todos]);
    
    return (
        <section className="app tab-completed">
            <h2 id="todos-heading">Completed List</h2>
             <ul className="todo-list" aria-live="polite">
                {filtered.map(todo => {
                   return (
                    <li className="todo-item">
                      {todo.text}
                    </li>
                   )
                })}
             </ul>
        </section>
    );
};

export default Completed;
