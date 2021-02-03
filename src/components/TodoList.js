import React, { useContext } from "react";
import TodoContext from "../contexts/context";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
const TodoList = ({}) => {
  const { state } = useContext(TodoContext);
  return (
    <div className="todo-list ">
      <TodoForm />
      <ul className="list-group">
        {state.todos.map((item, i) => (
          <TodoItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
