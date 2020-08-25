import React from "react";

export default function ToDonesContainer() {
  const toDones = [
    { text: "Create a website", done: true },
    { text: "Buy new matrass", done: true },
    { text: "Upgrade mouse", done: true },
  ];

  const toDoneItems = toDones.map((task) => {
    return (
      <div className="todones-item">
        <p>{task.text}</p>
        <div className="action">
          <button className="btn">&#8635;</button>
        </div>
      </div>
    );
  });

  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {toDoneItems}
    </div>
  );
}
