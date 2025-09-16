import React, { JSX } from "react";
import TodoApp from "./components/todos/TodoApp";

export default function App(): JSX.Element {
  return (
    <div className="app">
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <TodoApp />
      </main>
    </div>
  );
}
