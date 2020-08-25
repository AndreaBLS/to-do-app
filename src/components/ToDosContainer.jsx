import React from "react";

export default function ToDosContainer() {
  const todos = [
    { text: "Wash myFace", done: false },
    { text: "Do live coding", done: false },
    { text: "Take out the thrash", done: false },
    { text: "Code more", done: false },
  ];

  const todosItems = todos.map((task) => {
    return (
      <div className="todo-item">
        <p>{task.text}</p>
        <div className="action">
          <button className="btn">&#10004;</button>
        </div>
      </div>
    );
  });

  return (
    <div className="todos-container">
      <form className="todo-form">
        <label className="input-item">
          <input type="text" name="todo" />
        </label>
        <input type="submit" className="btn" value="ADD" />
      </form>

      <div className="todos">
        <h3>TO DO</h3>
        {todosItems}
      </div>
    </div>
  );
}
