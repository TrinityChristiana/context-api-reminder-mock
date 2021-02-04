import React from "react";

const FormToggleButton = ({ setShowForm }) => {
  return (
    <div className="todo-form-toggle" onClick={() => setShowForm(true)}>
      <i className="fas fa-plus-circle"></i> New Todo
    </div>
  );
};

export default FormToggleButton;
