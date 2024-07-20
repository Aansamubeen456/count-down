const months = [
  "january",
  "feburary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

const tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// const futureDate = new Date(2024, 1, 24, 12, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const date = futureDate.getDate();
const minute = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const day = weekDays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}: ${minute}am`;
console.log(day);

function getRemainingTime() {
  const futureTime = futureDate.getTime();
  const today = new Date().getTime();
  const remainingTime = futureTime - today;

  //   console.log(futureTime);
  //   console.log(remainingTime);

  // 1sec = 1000ms
  // 1min = 60 sec
  // 1hour = 60min
  // 1day = 24hours

  const oneMinute = 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
  const sec = 1000;

  let days = Math.floor(remainingTime / oneDay);
  let hours = Math.floor((remainingTime % oneDay) / oneHour);
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let seconds = Math.floor((remainingTime % oneMinute) / sec);

  //   change format of time
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  // set values
  const values = [days, hours, minutes, seconds];
  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });

  if (remainingTime < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class = "expired">sorry, the giveaway has expired!</h4>`;
  }
}
const countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
