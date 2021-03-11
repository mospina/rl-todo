import React from "react";

const Task = ({ task }: Tasks.TaskProps) => {
  return (
    <div>
      <p>{task.id}</p>
      <p>{task.completed}</p>
      <p>{task.content}</p>
      <p>{task.priority}</p>
    </div>
  );
};

export default Task;
