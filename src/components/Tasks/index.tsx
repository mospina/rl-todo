import React, { useState, useRef } from "react";
import styled from "styled-components";
import List from "./List";
import Form from "./Form";
import Stats from "./Stats";
import Togglable from "../Togglable";

const Tasks = () => {
  const [tasks, setTasks] = useState<Tasks.Tasks>([]);
  const createFormRef = useRef<Togglable.TogglableRef>();

  const handleCreateTask = (task: Tasks.CreateTaskInput) => {
    if (createFormRef && createFormRef.current)
      createFormRef.current.toggleVisibility();
    const newTask = createTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (id: number, changes: Tasks.Task) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? changes : task));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Header>RL To Do</Header>
      <Main>
        <Togglable buttonLabel="add task" ref={createFormRef}>
          <Form onSubmit={handleCreateTask} />
        </Togglable>
        <List
          tasks={tasks}
          onTaskUpdate={handleUpdateTask}
          onTaskDelete={handleDeleteTask}
        />
        <Stats tasks={tasks} />
      </Main>
    </Container>
  );
};

const createTask = ({
  content,
  priority,
}: Tasks.CreateTaskInput): Tasks.Task => ({
  content,
  priority,
  completed: false,
  id: generateId(),
});

const generateId = (): number => Number((Math.random() * 1000000).toFixed(0));

const Container = styled.div`
  background-color: #1d2671;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

const Header = styled.h2`
  color: #06f4b1;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 100%;
`;

export default Tasks;
