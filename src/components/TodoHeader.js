import React, { useState, useContext } from "react";
import TodoContext from "../contexts/context";

const TodoHeader = () => {
  const [showTitle] = useState(false);
  const { state } = useContext(TodoContext);

  return (
    <>
      <div>
        <div></div>
        {showTitle && <h1>{state.todoTitle}</h1>}
        <div></div>
      </div>
    </>
  );
};

export default TodoHeader;
