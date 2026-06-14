import { useEffect, useState } from 'react';

export const Clock = () => {
  console.log('Rendering Clock component');

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('Render finished, triggering useEffect.');

    const intervalId = setInterval(() => {
      setDate(() => new Date());
    }, 1000);

    return () => {
      console.log('Unmounting component, triggering useEffect cleanup.');

      clearInterval(intervalId);
    };
  }, []);

  const addLeadingZeroes = (num: number) => {
    return String(num).padStart(2, '0');
  };

  const getFormattedTime = () => {
    const hours = addLeadingZeroes(date.getHours());
    const minutes = addLeadingZeroes(date.getMinutes());
    const seconds = addLeadingZeroes(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <section id='clock'>
      <p className='time-slot'>{getFormattedTime()}</p>
    </section>
  );
};
