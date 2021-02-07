import React, { useContext, useState } from "react";
import TodoContext from "../contexts/context";
import TodoForm from "../components/TodoForm";
import { TOGGLE_TODO } from "../contexts/constants";

const TodoItem = ({ item }) => {
  const { dispatch } = useContext(TodoContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggle = () => {
    dispatch({ type: TOGGLE_TODO, payload: item });
  };

  const toggleEditing = () => {
    setIsUpdating(!isUpdating);
  };
  return (
    <li className="todo-list-item list-group-item">
      <span onClick={handleToggle} className="todo-list-item-checked">
        {item.completed ? (
          <i className="fas fa-circle"></i>
        ) : (
          <i className="far fa-circle"></i>
        )}
      </span>
      {isUpdating ? (
        <>
          <TodoForm item={item} setIsUpdating={setIsUpdating} />
        </>
      ) : (
        <>
          <span onClick={toggleEditing} className="todo-list-item-text">
            {item.name}
          </span>
        </>
      )}
    </li>
  );
};

export default TodoItem;
