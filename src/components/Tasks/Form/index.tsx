import React, { useState } from "react";

const Form = ({ onSubmit }: Tasks.FormProps) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (content.length === 0) {
      setError("Content can not be empty");
      return;
    }

    onSubmit({ content, priority });
    setContent("");
    setPriority(1);
    setError(null);
  };

  const handlePriorityChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(target.value);
    if (newValue <= 0) {
      setError("Priority must be higher than 0");
      return;
    }

    setPriority(newValue);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <label htmlFor="Content">Task: </label>
      <input
        id="content"
        type="text"
        value={content}
        name="Content"
        onChange={({ target }) => setContent(target.value)}
      />
      <label htmlFor="Priority">Priority: </label>
      <input
        id="priority"
        type="number"
        value={priority}
        name="Priority"
        onChange={handlePriorityChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
