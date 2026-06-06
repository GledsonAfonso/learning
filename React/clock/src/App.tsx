import './App.css';
import { Clock } from './components/Clock/Clock';

export const App = () => {
  console.log('Rendering App component');

  return (
    <section className='center'>
      <Clock />
    </section>
  );
};
