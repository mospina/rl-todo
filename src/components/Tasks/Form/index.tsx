import React, { useState } from "react";

const Form = ({ onSubmit }: Tasks.FormProps) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(1);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit({ content, priority });
    setContent("");
    setPriority(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Content">Task</label>
      <input
        id="content"
        type="text"
        value={content}
        name="Content"
        onChange={({ target }) => setContent(target.value)}
      />
      <label htmlFor="Priority">Priority</label>
      <input
        id="priority"
        type="number"
        value={priority}
        name="Priority"
        onChange={({ target }) => setPriority(Number(target.value))}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
