import type { Time } from '../types';

export const calculateTime = ({
  hour,
  minute,
  second,
}: Time): Time => {
  let newSecond = second + 1;
  let newMinute = minute;
  let newHour = hour;

  if (newSecond >= 60) {
    newSecond = 0;
    newMinute++;

    if (newMinute >= 60) {
      newMinute = 0;
      newHour++;

      if(newHour >= 24) {
        newHour = 0;
      }
    }
  }

  return {
    hour: newHour,
    minute: newMinute,
    second: newSecond,
  };
};
