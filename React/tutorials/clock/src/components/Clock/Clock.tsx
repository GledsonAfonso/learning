import { useState } from 'react';
import type { Time } from '../../types';
import { calculateTime } from '../../utils/clock';

export const Clock = ({
  hour,
  minute,
  second,
}: Time) => {
  const [timeDetails, setTimeDetails] = useState<Time>({
    hour,
    minute,
    second,
  });

  console.log('Rendering Clock component');

  setInterval(() => {
    const newTime = calculateTime(timeDetails);
    setTimeDetails(() => ({ ...newTime }));
  }, 1000);

  return (
    <section id='clock'>
      <p className='time-slot'>{timeDetails.hour}</p>
      <p className='delimiter'>:</p>
      <p className='time-slot'>{timeDetails.minute}</p>
      <p className='delimiter'>:</p>
      <p className='time-slot'>{timeDetails.second}</p>
    </section>
  );
};
