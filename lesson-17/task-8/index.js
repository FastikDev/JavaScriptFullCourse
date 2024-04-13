export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed++;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed++;
      }
      console.log(this.getTime());
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' : ''}${this.secondsPassed}`;
  },
};

timer.startTimer(); // put your code here
