import React from "react";
import styled from "styled-components";
import Task from "../Task";

const List = ({ tasks, onTaskUpdate, onTaskDelete }: Tasks.ListProps) => (
  <Table>
    <Headers>
      <Completed>completed</Completed>
      <Content>task</Content>
      <Priority>priority</Priority>
      <Delete>delete</Delete>
    </Headers>
    {tasks.sort(compare).map((task) => (
      <Task
        key={task.id}
        task={task}
        onTaskUpdate={onTaskUpdate}
        onTaskDelete={onTaskDelete}
      />
    ))}
  </Table>
);

const compare = (a: Tasks.Task, b: Tasks.Task): number => {
  if (a.priority < b.priority) return -1;
  if (a.priority > b.priority) return 1;
  if (a.content.toLowerCase() < b.content.toLowerCase()) return -1;
  if (a.content.toLowerCase() > b.content.toLowerCase()) return 1;
  return 0;
};

const Table = styled.div`
  display: flex
  width: 100%
  margin: 1em;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #E8D5B5;
  border-radius: 25px;
`;

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #1d2671;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const Completed = styled.div`
  text-align: center;
  flex-basis: 5%;
  padding: 0 0 0 5rem;
  text-transform: uppercase;
`;

const Content = styled.div`
  text-align: center;
  flex-basis: 70%;
  padding: 0 5rem 0 5rem;
  text-transform: uppercase;
  text-transform: uppercase;
`;

const Priority = styled.div`
  text-align: center;
  flex-basis: 20%;
  padding: 0 5rem 0 5rem;
  text-transform: uppercase;
`;
const Delete = styled.div`
  text-align: center;
  flex-basis: 5%;
  padding: 0 5rem 0 5rem;
  text-transform: uppercase;
`;

export default List;
