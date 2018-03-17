const countdown = document.querySelector('.countdown');

// Set the launch data
const launchData = new Date('Apr 8, 2020 00:00:00').getTime();

const intvl = setInterval(() => {
  // Todays date and time
  const now = new Date().getTime();

  // Distance from now to the launch Date
  const distance = launchData - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
  <div>${days}<span> Days</span></div>
  <div>${hours}<span> Hours</span></div>
  <div>${mins}<span> Minutes</span></div>
  <div>${seconds}<span> Seconds</span></div>
  `;

  if(distance < 0){
    clearInterval(intvl);
    countdown.innerHTML = "Launched!";
  }
}, 1000);
