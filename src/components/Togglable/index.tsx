import React, { useState, useImperativeHandle } from "react";
import styled from "styled-components";

const Togglable = React.forwardRef((props: Togglable.Togglable, ref) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });

  return (
    <>
      {!visible ? (
        <div>
          <Button onClick={toggleVisibility}>{props.buttonLabel}</Button>
        </div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
});

const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem;
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
`;
Togglable.displayName = "Togglable";

export default Togglable;
