const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
