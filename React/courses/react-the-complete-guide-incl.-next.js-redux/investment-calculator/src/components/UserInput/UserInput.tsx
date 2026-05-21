import { NumericalInput } from '../NumericalInput/NumericalInput';
import type { UserInputProps } from './types';

export const UserInput = ({
  input,
  onChange,
}: UserInputProps) => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <NumericalInput
          id='initial-investment'
          title='INITIAL INVESTMENT'
          value={input.initialInvestment}
          onStateChange={(event) => onChange('initialInvestment', event)}
        />
        <NumericalInput
          id='annual-investment'
          title='ANNUAL INVESTMENT'
          value={input.annualInvestment}
          onStateChange={(event) => onChange('annualInvestment', event)}
        />
      </div>
      <div className='input-group'>
        <NumericalInput
          id='expected-return'
          title='EXPECTED RETURN'
          value={input.expectedReturn}
          onStateChange={(event) => onChange('expectedReturn', event)}
        />
        <NumericalInput
          id='duration'
          title='DURATION'
          value={input.duration}
          onStateChange={(event) => onChange('duration', event)}
        />
      </div>
    </section>
  );
};
