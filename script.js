// DOM references
// input
const yearInput = document.querySelector("#year-input");
const monthInput = document.querySelector("#month-input");
const dayInput = document.querySelector("#day-input");

// errors
const yearError = document.querySelector("#year-error");
const monthError = document.querySelector("#month-error");
const dayError = document.querySelector("#day-error");

// results
const yearResult = document.querySelector("#year-result");
const monthResult = document.querySelector("#month-result");
const dayResult = document.querySelector("#day-result");

// submit button
const submit = document.querySelector("#submit-btn");

// JS functions
const calculateAge = () => {
  // initiate date and error flag
  const today = new Date();
  const birthday = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
  let error = false;

  //2024-12-22

  // break current date apart into individual year, month, day
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  // clear current results
  yearResult.innerHTML = "";
  monthResult.innerHTML = "";
  dayResult.innerHTML = "";

  // error handling for year
  if (yearInput.value > currentYear) {
    yearError.innerHTML = "Must be in the past";
    error = true;
  } else if (yearInput.value === "") {
    yearError.innerHTML = "This field is required";
    error = true;
  } else {
    yearError.innerHTML = "";
  }
  // error handling for month
  if ((monthInput.value && monthInput.value < 1) || monthInput.value > 12) {
    monthError.innerHTML = "Must be a valid month";
    error = true;
  } else if (monthInput.value === "") {
    monthError.innerHTML = "This field is required";
    error = true;
  } else {
    monthError.innerHTML = "";
  }

  // error handling for day
  if ((dayInput.value && dayInput.value < 1) || dayInput.value > 31) {
    dayError.innerHTML = "Must be a valid day";
    error = true;
  } else if (dayInput.value === "") {
    dayError.innerHTML = "This field is required";
    error = true;
  } else {
    dayError.innerHTML = "";
  }

  // calculate and set results
  userYear = currentYear - birthday.getFullYear();
  userMonth = currentMonth - (birthday.getMonth() + 1);
  userDay = currentDay - birthday.getDay();

  if (userDay < 0) {
    userDay += new Date(currentYear, currentMonth - 1, 0).getDate();
    userMonth--;
  }

  if (userMonth < 0) {
    userMonth += 12;
    userYear--;
  }

  // update html depending on error status
  if (!error) {
    yearResult.innerHTML = userYear;
    monthResult.innerHTML = userMonth;
    dayResult.innerHTML = userDay;
  } else {
    yearResult.innerHTML = "- -";
    monthResult.innerHTML = "- -";
    dayResult.innerHTML = "- -";
  }
};

// Event handlers
submit.addEventListener("click", calculateAge);
