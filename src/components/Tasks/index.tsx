import React, {useState} from "react";
import List from "./List";
import Form from "./Form";

const Tasks = () => {
  const [tasks, setTasks] = useState<Tasks.Tasks>([])
  
  const handleCreateTask = (task: Tasks.CreateTaskInput) => {
    const newTask = createTask(task)
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <h2>RL To Do</h2>
      <p>A todo list app</p>  
      <Form onSubmit={handleCreateTask} />
      <List tasks={tasks} />
    </div>
  );
};

const createTask = ({content, priority}: Tasks.CreateTaskInput): Tasks.Task => ({
    content,
    priority,
    completed: false,
    id: generateId()
  })

const generateId = (): number => Number((Math.random() * 1000000).toFixed(0))

export default Tasks;
