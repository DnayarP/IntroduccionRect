import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onToggleButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onToggleButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
