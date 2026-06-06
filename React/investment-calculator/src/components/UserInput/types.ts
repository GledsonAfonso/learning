export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

type InputOnChangeFn = (inputProperty: keyof InvestmentInput, event: React.ChangeEvent<HTMLInputElement>) => void;

export interface UserInputProps {
  input: InvestmentInput;
  onChange: InputOnChangeFn;
}
