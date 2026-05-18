import { useState } from "react";
import type { NumericalInputProps } from "./types";

export const NumericalInput = ({
  id,
  title,
  initialInputValue,
}: NumericalInputProps) => {
  const [value, setValue] = useState(initialInputValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputFocusAndBlur = () => {
    setIsEditing((editing) => !editing);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  let inputType = isEditing ? 'number' : 'text';

  return (
    <p>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={inputType}
        required
        value={value}
        onChange={handleOnChange}
        onFocus={handleInputFocusAndBlur}
        onBlur={handleInputFocusAndBlur}
      />
    </p>
  );
};
