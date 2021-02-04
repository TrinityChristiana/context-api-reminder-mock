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
      dispatch({
        type: UPDATE_TODO,
        payload: {
          ...item,
          name: newTodo,
        },
      });
      setIsUpdating(false);
    } else {
      dispatch({ type: ADD_TODO, payload: newTodo });
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
