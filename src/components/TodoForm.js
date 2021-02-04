import React, { useState, useContext } from "react";
import TodoContext from "../contexts/context";
import { ADD_TODO } from "../contexts/actions";

const TodoForm = () => {
  const [newTodo, setTodo] = useState("");
  const { state, dispatch } = useContext(TodoContext);

  const addTodo = () => {
    const lastId = state.todos.map((t) => t.id).sort()[state.todos.length - 1];
    const newTodoObject = {
      name: newTodo,
      completed: false,
      id: lastId + 1,
    };
    dispatch({ type: ADD_TODO, payload: newTodoObject });
    setTodo("");
  };
  return (
    <div className="input-group input-group-lg mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="New Todo"
        aria-label="New Todo"
        value={newTodo}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
        onChange={(e) => setTodo(e.target.value)}
      />
    </div>
  );
};

export default TodoForm;
