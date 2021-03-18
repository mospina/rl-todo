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
        <TrashIcon
          id={`delete-task-${task.id}`}
          className="round-button"
          onClick={() => onTaskDelete(task.id)}
        />
      </Delete>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fbf7ff;
  color: #1d2671;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Completed = styled.div`
  text-align: center;
  flex-basis: 15%;
  padding: 0 5rem 0 5rem;
`;

const Content = styled.div`
  text-align: left;
  flex-basis: 60%;
  padding: 0 5rem 0 5rem;
`;

const Priority = styled.div`
  text-align: left;
  flex-basis: 20%;
  padding: 0 5rem 0 5rem;
`;
const Delete = styled.div`
  text-align: left;
  width: 10%;
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

const TrashIcon = styled.div`
  color: #000;
  position: absolute;
  margin-left: 5px;
  margin-top: 7px;
  width: 9px;
  height: 10px;
  border-left: solid 1px currentColor;
  border-right: solid 1px currentColor;
  border-bottom: solid 1px currentColor;
  border-radius: 0 0 2px 2px;

  &:before {
    content: "";
    position: absolute;
    left: -4px;
    top: -2px;
    width: 17px;
    height: 1px;
    background-color: currentColor;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    top: -5px;
    width: 7px;
    height: 2px;
    border-left: solid 1px currentColor;
    border-right: solid 1px currentColor;
    border-top: solid 1px currentColor;
    border-radius: 4px 4px 0 0;
  }

  &:hover {
    background: #c0c0c0;
    &:after {
      background: #c0c0c0;
    }
  }
`;

export default Task;
