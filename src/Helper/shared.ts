export const getCountDown = (data: any): string => {
  if (data < 1) {
    return 'Expired';
  }

  const days = Math.floor(data / 86400);
  data -= days * 86400;
  const hours = Math.floor(data / 3600) % 24;
  data -= hours * 3600;
  const minutes = Math.floor(data / 60) % 60;
  data -= minutes * 60;
  const seconds = Math.floor(data) % 60;

  if (days) {
    return days + 'd ' + hours + 'h';
  } else if (hours) {
    return hours + 'h ' + minutes + 'm';
  } else if (minutes) {
    return minutes + 'm ' + seconds + 's';
  } else {
    return seconds + 's';
  }
};
