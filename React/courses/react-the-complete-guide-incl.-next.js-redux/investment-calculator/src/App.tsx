import { useState } from 'react';
import type { InvestmentInput } from './components/UserInput/types';
import { UserInput } from './components/UserInput/UserInput';
import { calculateInvestmentResults, formatter } from './util/investment';

export const App = () => {
  const [input, setInput] = useState<InvestmentInput>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const results = calculateInvestmentResults(input);

  const handleInputChange = (inputProperty: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    setInput((previousInput) => ({
      ...previousInput,
      [inputProperty]: value,
    }));
  };

  return (
    <>
      <UserInput input={input} onChange={handleInputChange} />

      <table id='result'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {results?.map((result) => (
            <tr key={result.id}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
