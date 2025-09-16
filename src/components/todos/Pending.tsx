import React, { useMemo, JSX } from 'react';
import useLocalTodos from '../../utils/useLocalTodos';

const Pending = (): JSX.Element => {
    const { todos } = useLocalTodos();
    const filtered = useMemo(() => {
        return todos.filter(t => !t.completed);
      }, [todos]);
    
    return (
        <section className="app tab-pending">
            <h2 id="todos-heading">Pending List</h2>
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

export default Pending;
