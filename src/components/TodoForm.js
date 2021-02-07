import React, { useState, useContext, useEffect } from "react";
import TodoContext from "../contexts/context";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../contexts/constants";
import FormToggleButton from "./FormToggleButton";

const TodoForm = ({ item = {}, setIsUpdating }) => {
  const [newTodo, setTodo] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { dispatch } = useContext(TodoContext);

  const handleDelete = () => {
    dispatch({ type: DELETE_TODO, payload: item });
  };

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
    <div className={`${item.id ? "todo-form" : "todo-form-new"} input-group`}>
      {showForm && (
        <>
          <textarea
            type="text"
            autoFocus
            onBlur={addTodo}
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
          <i
            className="todo-list-item-delete fas fa-trash"
            onClick={handleDelete}
          ></i>
        </>
      )}

      {!item.id && !showForm && <FormToggleButton setShowForm={setShowForm} />}
    </div>
  );
};

export default TodoForm;
