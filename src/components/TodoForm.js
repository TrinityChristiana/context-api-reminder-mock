import React, { useState, useContext, useEffect } from "react";
import TodoContext from "../contexts/context";
import { ADD_TODO, UPDATE_TODO } from "../contexts/constants";
import FormToggleButton from "./FormToggleButton";

const TodoForm = ({ item = {}, setIsUpdating }) => {
  const [newTodo, setTodo] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { state, dispatch } = useContext(TodoContext);

  useEffect(() => {
    if (item.id) {
      setShowForm(true);
      setTodo(item.name);
    }
  }, [item]);

  const addTodo = () => {
    if (item.id) {
      const newTodoObject = {
        ...item,
        name: newTodo,
      };
      dispatch({ type: UPDATE_TODO, payload: newTodoObject });
      setIsUpdating(false);
    } else {
      const lastId = state.todos.map((t) => t.id).sort()[
        state.todos.length - 1
      ];
      const newTodoObject = {
        name: newTodo,
        completed: false,
        id: lastId + 1,
      };
      dispatch({ type: ADD_TODO, payload: newTodoObject });
    }
    setTodo("");
  };
  return (
    <div
      className={`${
        item.id ? "todo-list-item-form" : "todo-form"
      } input-group input-group-lg`}
    >
      {showForm && (
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
      )}

      {!item.id && !showForm && <FormToggleButton setShowForm={setShowForm} />}
    </div>
  );
};

export default TodoForm;
