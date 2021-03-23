import React, { useState } from "react";
import styled from "styled-components";

const priorityOptions = [
  { label: "highest", value: 1 },
  { label: "high", value: 2 },
  { label: "medium", value: 3 },
  { label: "low", value: 4 },
  { label: "lowest", value: 5 },
];

const Form = ({ onSubmit, onCancel }: Tasks.FormProps) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (content.length === 0) {
      setError("Content can not be empty");
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }

    onSubmit({ content, priority });
    setContent("");
    setPriority(1);
    setError(null);
  };

  const handlePriorityChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(target.value);

    setPriority(newValue);
    setError(null);
  };

  return (
    <>
      {error && <Errors className="error">{error}</Errors>}
      <FormContainer onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="Content">Task: </label>
          <input
            id="create-content"
            type="text"
            value={content}
            name="Content"
            onChange={({ target }) => setContent(target.value)}
          />
        </FormField>
        <FormField>
          <label htmlFor="Priority">Priority: </label>
          <Select
            id={`create-priority`}
            value={priority}
            onChange={handlePriorityChange}
          >
            {priorityOptions.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </Select>
        </FormField>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit">Add</Button>
      </FormContainer>
    </>
  );
};

const Errors = styled.div`
  color: #ff0000;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const FormField = styled.div`
  padding: 0 1rem 0 1rem;

  @media screen and (max-width: 400px) {
    padding: 0 0 1rem 0;
  }
`;

const Select = styled.select`
  display: inline-block;
  width: auto;
  padding: 0.6em 1.4em 0.5em 0.8em;
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

const Button = styled.button`
  display: inline-block;
  margin: 0 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
  width: auto;
  box-sizing: border-box;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;

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

  @media screen and (max-width: 400px) {
    margin: 0 0 1rem 0;
    padding: 0.5rem;
  }
`;

export default Form;
