import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Results } from './components/Results/Results';
import type { InvestmentInput } from './components/UserInput/types';
import { UserInput } from './components/UserInput/UserInput';
import { calculateInvestmentResults } from './util/investment';

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
      <Header />
      <UserInput input={input} onChange={handleInputChange} />

      { (input.duration < 1) ? <p className='center'>Duration needs to be a positive number</p> : null }

      <Results results={results} />
    </>
  );
};
