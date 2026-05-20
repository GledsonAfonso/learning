import { useState } from 'react';
import { NumericalInput } from './components/NumericalInput/NumericalInput';
import { calculateInvestmentResults, formatter } from './util/investment';

export const App = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <>
      <section id='user-input'>
        <div className='input-group'>
          <NumericalInput
            id='initial-investment'
            title='INITIAL INVESTMENT'
            value={initialInvestment}
            onStateChange={setInitialInvestment}
          />
          <NumericalInput
            id='annual-investment'
            title='ANNUAL INVESTMENT'
            value={annualInvestment}
            onStateChange={setAnnualInvestment}
          />
        </div>
        <div className='input-group'>
          <NumericalInput
            id='expected-return'
            title='EXPECTED RETURN'
            value={expectedReturn}
            onStateChange={setExpectedReturn}
          />
          <NumericalInput
            id='duration'
            title='DURATION'
            value={duration}
            onStateChange={setDuration}
          />
        </div>
      </section>
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
