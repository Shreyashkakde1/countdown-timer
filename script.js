const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("minutes");
const secondElement = document.getElementById("second");

const newYears = "1 Jan 2023";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = new Date(newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const second = Math.floor(totalSeconds % 60);

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  minsElement.innerHTML = formatTime(minutes);
  secondElement.innerHTML = formatTime(second);

//   console.log(formatTime(hours));

//   console.log(days, hours, minutes, second);
}

function formatTime(time){
    return time<10 ? (`0${time}`) : time
}

// initial call
countdown();

setInterval(countdown, 1000);
