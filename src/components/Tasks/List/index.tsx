import React from "react";
import Task from "../Task";

const List = ({ tasks, onTaskUpdate, onTaskDelete }: Tasks.ListProps) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>completed</th>
          <th>task</th>
          <th>priority</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onTaskUpdate={onTaskUpdate}
            onTaskDelete={onTaskDelete}
          />
        ))}
      </tbody>
    </table>
    <p>{tasks.length}</p>
  </div>
);

export default List;
