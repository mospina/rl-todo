import React from "react";
import styled from "styled-components";

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
    <Row>
      <td>
        <input
          id={`completed-${task.id}`}
          name="Completed"
          type="checkbox"
          checked={task.completed}
          onChange={handleCompleted}
        />
      </td>
      <Content>{task.content}</Content>
      <td>
        <RoundButton
          id={`increment-priority-${task.id}`}
          className="round-button"
          onClick={handleIncrementPriority}
        >
          +
        </RoundButton>
        {task.priority}
        <RoundButton
          id={`decrement-priority-${task.id}`}
          className="round-button"
          onClick={handleDecrementPriority}
        >
          -
        </RoundButton>
      </td>
      <td>
        <RoundButton
          id={`delete-task-${task.id}`}
          className="round-button"
          onClick={() => onTaskDelete(task.id)}
        >
          X
        </RoundButton>
      </td>
    </Row>
  );
};

const Row = styled.tr`
  background-color: #e8e8e8;
`;

const Content = styled.td`
  text-align: left;
`;

const RoundButton = styled.button`
  margin: 0 1em 0 1em;
  border-radius: 50%;
  border: 1px solid #98a1a4;
  overflow: hidden;
  background: transparent;
  box-shadow: 0 0 3px gray;

  &:hover {
    background: #c0c0c0;
  }
`;

export default Task;
