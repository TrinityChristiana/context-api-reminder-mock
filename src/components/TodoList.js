import React, { useContext } from "react";
import TodoContext from "../contexts/context";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const { state } = useContext(TodoContext);
  return (
    <div className="todos">
      
      <h1>Today</h1>

      <ul className="todo-list list-group">
        {state.todos.map((item, i) => (
          <TodoItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
