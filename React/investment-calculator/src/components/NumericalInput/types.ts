export interface NumericalInputProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
  onStateChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
}
