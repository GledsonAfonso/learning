import { NumericalInput } from "./components/NumericalInput/NumericalInput";

export const App = () => {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <NumericalInput id="initial-investment" title="INITIAL INVESTMENT" initialInputValue="0" />
          <NumericalInput id="annual-investment" title="ANNUAL INVESTMENT" initialInputValue="0" />
        </div>
        <div className="input-group">
          <NumericalInput id="expected-return" title="EXPECTED RETURN" initialInputValue="0" />
          <NumericalInput id="duration" title="DURATION" initialInputValue="0" />
        </div>
      </section>
    </>
  );
};
