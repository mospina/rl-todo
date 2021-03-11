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
          id={`completed-${task.id}`}
          name="Completed"
          type="checkbox"
          checked={task.completed}
          onChange={handleCompleted}
        />
      </td>
      <td>{task.content}</td>
      <td>
        <button
          id={`increment-priority-${task.id}`}
          onClick={handleIncrementPriority}
        >
          increment
        </button>
        {task.priority}
        <button
          id={`decrement-priority-${task.id}`}
          onClick={handleDecrementPriority}
        >
          decrement
        </button>
      </td>
      <td>
        <button
          id={`delete-task-${task.id}`}
          onClick={() => onTaskDelete(task.id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default Task;
