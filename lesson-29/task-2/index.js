export const pinger = (count, period) => {
  let i = count;

  const interval = setInterval(() => {
    if (i-- > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};
