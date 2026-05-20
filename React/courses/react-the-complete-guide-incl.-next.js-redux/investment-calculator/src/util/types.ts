export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestmentResult {
  id: string;
  year: number;
  interest: number;
  totalInterest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}
