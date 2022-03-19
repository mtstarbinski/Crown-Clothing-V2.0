import React from "react";
import { Group, Input, FormInputLabel } from "./FormInput.style";

const FormInput = ({ label, ...inputProps }) => {
  return (
    <Group>
      <Input {...inputProps} required />
      {label && (
        //  IF THE FIELD IS EMPTY I.E. 0 CHARS, SHRINK IS CONSIDERED FALSE
        <FormInputLabel shrink={inputProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
