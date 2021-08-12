const hour = document.getElementById("clock-hour"),
  minute = document.getElementById("clock-minute"),
  second = document.getElementById("clock-second"), 
  textHour = document.getElementById("text-hour"),
  textMinute = document.getElementById("text-minute"),
  textAmPm = document.getElementById("text-ampm"),
  dateWeekDay = document.getElementById("date-weekday"),
  dateDay = document.getElementById("date-day"),
  dateMonth = document.getElementById("date-month"),
  dateYear = document.getElementById("date-year");

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  const date = new Date();
  let hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds(),
    ampm,
    weekday = date.getDay(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();

  let hhDeg = hh * 30,
    mmDeg = mm * 6,
    ssDeg = ss * 6;

  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else ampm = "AM";
  if (hh == 0) hh = 12;
  if (hh < 10) hh = `0${hh}`;
  if (mm < 10) mm = `0${mm}`;

  hour.style.transform = `rotate(${hhDeg + mmDeg / 12}deg)`;
  minute.style.transform = `rotate(${mmDeg}deg)`;
  second.style.transform = `rotate(${ssDeg}deg)`;
  textHour.textContent = hh;
  textMinute.textContent = mm;
  textAmPm.textContent = ampm;
  dateWeekDay.textContent = `${DAYS[weekday]},`;
  dateDay.textContent = day;
  dateMonth.textContent = MONTHS[month];
  dateYear.textContent = year;
}, 1000);

const themeButton = document.getElementById("theme-button");

const selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
const getCurrentIcon = () =>
  document.body.classList.contains("dark-theme") ? "light_mode" : "dark_mode";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark-theme" ? "add" : "remove"](
    "dark-theme"
  );
  themeButton.textContent =
    selectedTheme === "dark-theme" ? "light_mode" : "dark_mode";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeButton.textContent = getCurrentIcon();
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
