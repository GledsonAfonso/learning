import type { Dispatch, SetStateAction } from 'react';

export interface NumericalInputProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
  onStateChange: Dispatch<SetStateAction<number>>;
}
