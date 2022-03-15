import React from "react";
import "./FormInput.style.scss";

const FormInput = ({label, ...inputProps }) => {
  return (
    <div className="group">
      <input {...inputProps} className="form-input" required />
      {label && (
        <label
          className={`${
            inputProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
