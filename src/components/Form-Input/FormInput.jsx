import React from "react";
import "./FormInput.style.scss";

const FormInput = ({ handleChange, label, ...inputProps }) => {
  return (
    <div className="group">
      <input {...inputProps} onChange={handleChange} className="form-input" />
      {label ? (
        <label
          className={`${
            inputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
