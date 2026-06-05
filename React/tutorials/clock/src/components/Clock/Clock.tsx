import { useState } from 'react';

export const Clock = () => {
  console.log('Rendering Clock component');

  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(() => new Date());
  }, 1000);

  return (
    <section id='clock'>
      <p className='time-slot'>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
    </section>
  );
};
