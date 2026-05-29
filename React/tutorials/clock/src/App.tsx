import './App.css';
import { Clock } from './components/Clock/Clock';

export const App = () => {
  const date = new Date();

  console.log('Rendering App component');

  return (
    <section className='center'>
      <Clock
        hour={date.getHours()}
        minute={date.getMinutes()}
        second={date.getSeconds()}
      />
    </section>
  );
};
