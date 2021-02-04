import React, { useContext, useState } from "react";
import TodoContext from "../contexts/context";
import TodoForm from "../components/TodoForm";
import { TOGGLE_TODO, DELETE_TODO } from "../contexts/actions";

const TodoItem = ({ item }) => {
  const { dispatch } = useContext(TodoContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleDoubleClick = () => {
    dispatch({ type: TOGGLE_TODO, payload: item });
  };
  const handleDelete = () => {
    dispatch({ type: DELETE_TODO, payload: item });
  };
  const toggleEditing = () => {
    setIsUpdating(!isUpdating);
  };
  return (
    <li className="todo-item list-group-item">
      {isUpdating ? (
        <>
          {" "}
          <TodoForm item={item} setIsUpdating={setIsUpdating}/>
        </>
      ) : (
        <>
          <span onClick={handleDoubleClick} className="todo-item-text">
            {item.completed ? <s>{item.name}</s> : <>{item.name}</>}
          </span>
          <i className="fas fa-trash" onClick={handleDelete}></i>
          <i className="fas fa-edit" onClick={toggleEditing}></i>
        </>
      )}
    </li>
  );
};

export default TodoItem;
