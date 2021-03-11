import React from "react";
import Task from "../Task";

const List = ({ tasks }: Tasks.ListProps) => (
  <div>
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
    <p>{tasks.length}</p>
  </div>
);

export default List;
