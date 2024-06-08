export const pinger = (count, period) => {
  let i = count;

  const interval = setInterval(() => {
    console.log('Ping');
    if (i++ >= count) {
      clearInterval(interval);
    }
  }, period);
};

pinger(5, 1000);
