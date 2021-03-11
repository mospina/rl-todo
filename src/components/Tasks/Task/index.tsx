import React from "react";

const Task = ({ task, onTaskUpdate, onTaskDelete }: Tasks.TaskProps) => {
  const handleCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTaskUpdate(task.id, { ...task, completed: event.target.checked });
  };

  const handleIncrementPriority = () => {
    const newPriority = task.priority - 1;
    if (newPriority <= 0) {
      return;
    }

    onTaskUpdate(task.id, { ...task, priority: newPriority });
  };

  const handleDecrementPriority = () =>
    onTaskUpdate(task.id, { ...task, priority: task.priority + 1 });

  return (
    <tr>
      <td>
        <input
          id="completed"
          name="Completed"
          type="checkbox"
          checked={task.completed}
          onChange={handleCompleted}
        />
      </td>
      <td>{task.content}</td>
      <td>
        <button id="increment-priority" onClick={handleIncrementPriority}>
          increment
        </button>
        {task.priority}
        <button id="decrement-priority" onClick={handleDecrementPriority}>
          decrement
        </button>
      </td>
      <td>
        <button id="delete-task" onClick={() => onTaskDelete(task.id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default Task;
