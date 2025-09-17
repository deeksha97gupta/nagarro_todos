import React, { useCallback, useState } from "react";
import { Todo } from "./types";
import { useTheme } from '../../utils/useTheme';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

// memo to avoid re-render unless props change
const TodoItem = React.memo(
    function TodoItem({ todo, onToggle, onRemove, onEdit }:Props) {
        const { theme } = useTheme();
        const [isEdit, setIsEdit] = useState<boolean>(false);
        const [skipToggle, setSkipToggle] = useState<boolean>(false);
        const [inputValue, setInputValue] = useState<string>("")
        const handleToggle = useCallback(() => !skipToggle && onToggle(todo.id), [onToggle, todo.id, skipToggle]);
        const handleRemove = useCallback(() => onRemove(todo.id), [onRemove, todo.id]);
        const handleEdit = useCallback(() => {
            onEdit(todo.id, inputValue);
            setIsEdit(false);
            setSkipToggle(true);
        }, [onEdit, todo.id, inputValue]);

        return (
            <li className="todo-item">
                {isEdit ?
                    <label>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            placeholder="Edit a todo"
                            aria-label={`Edit todo ${todo.text}`}
                        />
                        <button
                          onClick={handleEdit}
                          aria-label={`Edit Done ${todo.text}`}
                          className={theme === "light" ? "light-button" : "dark-button"}
                        > 
                            Done 
                        </button>
                    </label> :
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={handleToggle}
                            aria-checked={todo.completed}
                            aria-label={`Mark ${todo.text} as ${todo.completed ? "incomplete" : "complete"}`}
                        />
                        <span className={todo.completed ? "completed" : undefined}>{todo.text}</span>
                    </label>
                }
                <div className="item-actions">
                    <button 
                        onClick={() => {
                            setInputValue(todo.text);
                            setIsEdit(true);
                        }}
                        aria-label={`Edit ${todo.text}`}
                        className={theme === "light" ? "light-button" : "dark-button"}
                    >
                        Edit
                    </button>
                    <button 
                        onClick={handleRemove}
                        aria-label={`Remove ${todo.text}`}
                        className={theme === "light" ? "light-button" : "dark-button"}
                    >
                        Delete
                    </button>
                </div>
            </li>
        );
    }
);

export default TodoItem;
