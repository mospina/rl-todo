import React, { useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";

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
          <button onClick={toggleVisibility}>{props.buttonLabel}</button>
        </div>
      ) : (
        <>
          {props.children}
          <button onClick={toggleVisibility}>cancel</button>
        </>
      )}
    </>
  );
});

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

Togglable.displayName = "Togglable";

export default Togglable;
