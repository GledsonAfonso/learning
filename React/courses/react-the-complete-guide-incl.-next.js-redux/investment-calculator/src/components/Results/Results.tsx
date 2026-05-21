import { formatter } from '../../util/investment';
import type { ResultsProps } from './types';

export const Results = ({
  results,
}: ResultsProps) => {
  return (
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
  );
};
