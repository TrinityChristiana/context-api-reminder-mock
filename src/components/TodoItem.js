import React, { useContext } from "react";
import TodoContext from "../contexts/context";
import { TOGGLE_TODO } from "../contexts/actions";
const TodoItem = ({ item }) => {
  const { state, dispatch } = useContext(TodoContext);
  const handleDoubleClick = () => {
    dispatch(TOGGLE_TODO, item);
  };
  return (
    <li className="list-group-item" onDoubleClick={handleDoubleClick}>
      {item.name} <i className="bi bi-trash-fill"></i>
      <i className="bi bi-pencil-square"></i>
    </li>
  );
};

export default TodoItem;
