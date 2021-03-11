import React from "react";
import Task from "../Task";

const List = ({ tasks, onTaskUpdate, onTaskDelete }: Tasks.ListProps) => (
  <table>
    <thead>
      <tr>
        <th>completed</th>
        <th>task</th>
        <th>priority</th>
      </tr>
    </thead>
    <tbody>
      {tasks.sort(compare).map((task) => (
        <Task
          key={task.id}
          task={task}
          onTaskUpdate={onTaskUpdate}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </tbody>
  </table>
);

const compare = (a: Tasks.Task, b: Tasks.Task): number => {
  if (a.priority < b.priority) return -1
  if (a.priority > b.priority) return 1
  if (a.content.toLowerCase() < b.content.toLowerCase()) return -1
  if (a.content.toLowerCase() > b.content.toLowerCase()) return 1
  return 0
}

export default List;
