import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDosContainer(props) {


  const todosItems = props.toDosProps.map((task) => {
    return (
          <ToDoItem taskProps={task}/>
    );
  })

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
        { todosItems }
      </div>
    </div>
  );
}
