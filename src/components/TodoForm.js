import React from "react";

const TodoForm = ({ item }) => {
  return (
    <div className="input-group input-group-lg mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="New Todo"
        aria-label="New Todo"
      />
    </div>
  );
};

export default TodoForm;
