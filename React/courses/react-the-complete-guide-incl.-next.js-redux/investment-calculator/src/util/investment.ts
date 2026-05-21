import type { InvestmentResult } from '../components/Results/types';
import type { InvestmentInput } from '../components/UserInput/types';

const objectHash = (obj: unknown) => {
  const str = JSON.stringify(obj);
  let hash = 0;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to a 32-bit integer
  }
  
  return Math.abs(hash).toString(16);
};

export const calculateInvestmentResults = (
  input: InvestmentInput
): InvestmentResult[] => {
  const annualData: InvestmentResult[] = [];
  let investmentValue = input.initialInvestment;

  for (let i = 0; i < input.duration; i++) {
    const interestEarnedInYear = investmentValue * (input.expectedReturn / 100);
    investmentValue += interestEarnedInYear + input.annualInvestment;

    const totalInterest = (annualData[i-1]?.totalInterest ?? 0) + interestEarnedInYear;
    const annualInvestment = investmentValue - totalInterest;

    const result = {
      year: i + 1,
      interest: interestEarnedInYear,
      totalInterest,
      valueEndOfYear: investmentValue,
      annualInvestment,
    };
    const resultId = objectHash(result);

    annualData.push({
      id: resultId,
      ...result,
    });
  }

  return annualData;
};

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
