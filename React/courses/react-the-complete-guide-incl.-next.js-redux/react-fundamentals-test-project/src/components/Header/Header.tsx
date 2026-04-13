import { getRandomInt } from '../../utils/math';
import './Header.css';

export const Header = () => {
  const descriptions = ['Fundamental', 'Crucial', 'Core'];
  const description = descriptions[getRandomInt(descriptions.length - 1)];

  return (
    <header>
      <img src={'/assets/react-core-concepts.png'} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
