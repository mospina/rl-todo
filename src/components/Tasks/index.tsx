import React, { useState, useRef } from "react";
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
    <div>
      <h2>RL To Do</h2>
      <Togglable buttonLabel="add task" ref={createFormRef}>
        <Form onSubmit={handleCreateTask} />
      </Togglable>
      <List
        tasks={tasks}
        onTaskUpdate={handleUpdateTask}
        onTaskDelete={handleDeleteTask}
      />
      <Stats tasks={tasks} />
    </div>
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

export default Tasks;
