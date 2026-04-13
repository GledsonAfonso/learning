import './App.css';
import { CoreConcepts } from './components/CoreConcepts/CoreConcepts';
import { Examples } from './components/Examples/Examples';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
};
