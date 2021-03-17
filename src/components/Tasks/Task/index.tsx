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
    <React.Fragment>
      <Completed>
        <input
          id={`completed-${task.id}`}
          name="Completed"
          type="checkbox"
          checked={task.completed}
          onChange={handleCompleted}
        />
      </Completed>
      <Content>{task.content}</Content>
      <Priority>
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
      </Priority>
      <Delete>
        <RoundButton
          id={`delete-task-${task.id}`}
          className="round-button"
          onClick={() => onTaskDelete(task.id)}
        >
          X
        </RoundButton>
      </Delete>
    </React.Fragment>
  );
};

const Completed = styled.div`
  text-align: center;
  width: 15%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 5rem 0 5rem;

`;

const Content = styled.div`
  flex-grow: 1;
  text-align: left;
  width: 60%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 5rem 0 5rem;
`;

const Priority = styled.div`
  text-align: left;
  width: 30%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 5rem 0 5rem;
`;
const Delete = styled.div`
  text-align: left;
  width: 30%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 5rem 0 5rem;
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
