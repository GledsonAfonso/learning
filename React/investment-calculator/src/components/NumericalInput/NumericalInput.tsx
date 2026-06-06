import { useState } from 'react';
import type { NumericalInputProps } from './types';

export const NumericalInput = ({
  id,
  title,
  value,
  onStateChange,
}: NumericalInputProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleInputFocusAndBlur = () => {
    setIsEditing((editing) => !editing);
  };

  const inputType = isEditing ? 'number' : 'text';

  return (
    <p>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={inputType}
        required
        value={value}
        onChange={onStateChange}
        onFocus={handleInputFocusAndBlur}
        onBlur={handleInputFocusAndBlur}
      />
    </p>
  );
};
