import React from "react";

function Task({ task, onDelete }) {
  return (
    <li>
      <span>{task.text} - {task.category}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;
