import React from "react";

export default function ToDoItem({taskProps}) {
  return (
    <div className="todo-item">
      <p>{taskProps.text}</p>
      <div className="action">
        <button className="btn"> &#10004;</button>
      </div>
    </div>
  );
}
