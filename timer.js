class Timer {
  constructor() {
    this.startTime = null;
    this.timerInterval = null;
    this.elapsedTime = 0;
  }

  startTimer() {
    if (!this.timerInterval) {
      this.startTime = Date.now() - this.elapsedTime;
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.updateTimerDisplay();
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  resetTimer() {
    this.stopTimer();
    this.elapsedTime = 0;
    this.updateTimerDisplay();
  }
  updateTimerDisplay() {
    const seconds = Math.floor((this.elapsedTime / 1000) % 60);
    const minutes = Math.floor((this.elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((this.elapsedTime / (1000 * 60 * 60)) % 24);

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update the display with formattedTime
    console.log(formattedTime);
  }
}
// Examplese:
const timer = new Timer();
timer.startTimer();
setTimeout(() => {
  timer.stopTimer();
}, 5000); // Stop timer after 5 seconds



