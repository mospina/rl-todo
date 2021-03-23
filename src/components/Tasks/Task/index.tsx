import React from "react";
import styled from "styled-components";

const priorityOptions = [
  { label: "highest", value: 1 },
  { label: "high", value: 2 },
  { label: "medium", value: 3 },
  { label: "low", value: 4 },
  { label: "lowest", value: 5 },
];

const Task = ({ task, onTaskUpdate, onTaskDelete }: Tasks.TaskProps) => {
  const handleCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTaskUpdate(task.id, { ...task, completed: event.target.checked });
  };

  const handlePriorityChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    const newPriority = Number(target.value);

    onTaskUpdate(task.id, { ...task, priority: newPriority });
  };

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
        <Select
          id={`change-priority-${task.id}`}
          value={task.priority}
          onChange={handlePriorityChange}
        >
          {priorityOptions.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </Select>
      </Priority>
      <Delete>
        <TrashIcon
          id={`delete-task-${task.id}`}
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

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
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

const Select = styled.select`
  display: block;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: auto;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px #e8d5b5;
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }

  & option {
    font-weight: normal;
  }
`;

const Delete = styled.div`
  text-align: left;
  width: 10%;
  padding: 0 5rem 0 5rem;
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
