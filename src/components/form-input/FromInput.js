import React from "react";
import "./formInput.styles.scss";

const FromInput = ({ label, ...inputProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputProps} />
      {label && (
        <label
          className={`${
            inputProps.value.length ? "shrink" : "null"
          } form-input-label`}
          htmlFor="displayName"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FromInput;
