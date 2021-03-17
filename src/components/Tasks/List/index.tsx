import React from "react";
import styled from "styled-components";
import Task from "../Task";

const List = ({ tasks, onTaskUpdate, onTaskDelete }: Tasks.ListProps) => (
  <Table>
    <Headers>
      <Header>completed</Header>
      <Header>task</Header>
      <Header>priority</Header>
      <Header>delete</Header>
    </Headers>
    {tasks.sort(compare).map((task) => (
      <Row>
        <Task
          key={task.id}
          task={task}
          onTaskUpdate={onTaskUpdate}
          onTaskDelete={onTaskDelete}
        />
      </Row>
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
  border-radius: 3%;
`;

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #E8D5B5;
  color: #1d2671;
  border-radius: 15%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fbf7ff;
  color: #1d2671;
`;

const Header = styled.div`
  width: 25%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 5rem 0 5rem;
`;

export default List;
