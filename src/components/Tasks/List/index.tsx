import React from "react";
import styled from "styled-components";
import Task from "../Task";

const List = ({ tasks, onTaskUpdate, onTaskDelete }: Tasks.ListProps) => (
  <Table>
    <thead>
      <Headers>
        <th>completed</th>
        <th>task</th>
        <th>priority</th>
        <th>delete</th>
      </Headers>
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
  </Table>
);

const compare = (a: Tasks.Task, b: Tasks.Task): number => {
  if (a.priority < b.priority) return -1;
  if (a.priority > b.priority) return 1;
  if (a.content.toLowerCase() < b.content.toLowerCase()) return -1;
  if (a.content.toLowerCase() > b.content.toLowerCase()) return 1;
  return 0;
};

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
  width: 60%;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Headers = styled.tr`
  background-color: #c0c0c0;
`;

export default List;
