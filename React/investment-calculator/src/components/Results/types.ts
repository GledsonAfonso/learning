export interface InvestmentResult {
  id: string;
  year: number;
  interest: number;
  totalInterest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

export interface ResultsProps {
  results: InvestmentResult[];
}
