import React, { useContext } from "react";
import TodoContext from "../contexts/context";
import { TOGGLE_TODO, DELETE_TODO } from "../contexts/actions";
const TodoItem = ({ item }) => {
  const { state, dispatch } = useContext(TodoContext);

  const handleDoubleClick = () => {
    dispatch({ type: TOGGLE_TODO, payload: item });
  };
  const handleDelete = () => {
    dispatch({ type: DELETE_TODO, payload: item });
  };
  return (
    <li className="todo-item list-group-item">
      <span onClick={handleDoubleClick} className="todo-item-text">
        {item.completed ? <s>{item.name}</s> : <>{item.name}</>}
      </span>{" "}
      <i className="fas fa-trash" onClick={handleDelete}></i>{" "}
      <i className="fas fa-edit"></i>
    </li>
  );
};

export default TodoItem;
