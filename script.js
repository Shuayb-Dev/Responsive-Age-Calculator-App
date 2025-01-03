function calculateAge() {
  // Current date
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1; // Months are 0-based, so add 1
  let currentDay = today.getDate();

  // Get birth date values
  let birthDay = parseInt(document.getElementById("day").value, 10);
  let birthMonth = parseInt(document.getElementById("month").value, 10);
  let birthYear = parseInt(document.getElementById("year").value, 10);

  // Initial age calculation
  let ageYear = currentYear - birthYear;
  let ageMonth = currentMonth - birthMonth;
  let ageDay = currentDay - birthDay;

  // Adjust if birth month hasn't occurred yet
  if (ageMonth < 0) {
    ageYear--; // Subtract one year
    ageMonth += 12; // Wrap around months (add 12 to negative value)
  }

  // Adjust if birth day hasn't occurred yet this month
  if (ageDay < 0) {
    ageMonth--; // Subtract one month
    let daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate(); // Get days in the previous month
    ageDay += daysInLastMonth; // Add the days from the previous month
  }

  // Update the result display
  document.getElementById("years-result").innerHTML = `   <p>
              <i><span>${ageYear}</span> years</i>
            </p>`;

  document.getElementById("months-result").innerHTML = `   <p>
              <i><span>${ageMonth}</span> months</i>
            </p>`;

  document.getElementById("days-result").innerHTML = `   <p>
              <i><span>${ageDay}</span> days</i>
            </p>`;
}
// Error Checking
function errorCheck() {
  let dayContainer = document.getElementById("day");
  let dayValue = dayContainer.value;
  let dayResult = document.getElementById("days-result");
  let errorMessage = document.getElementById("error-message");

  let monthContainer = document.getElementById("month");
  let monthValue = monthContainer.value;
  let monthErrorMessage = document.getElementById("month-error-message");
  let MonthResult = document.getElementById("months-result");

  let today = new Date();
  let currentYear = today.getFullYear();
  let yearContainer = document.getElementById("year");
  let yearValue = yearContainer.value;
  let yearErrorMessage = document.getElementById("year-error-message");
  let yearResult = document.getElementById("years-result");

  if (dayValue === "") {
    errorMessage.innerHTML = "This Field is Required";
    errorMessage.style.display = "block";
    dayContainer.classList.add("error");
    dayResult.innerHTML = "<p><i><span>--</span> days</i></p>";
  } else if (dayValue < 1 || dayValue > 31) {
    dayContainer.classList.add("error");
    dayResult.innerHTML = "<p><i><span>--</span> days</i></p>";
    errorMessage.innerHTML = "Must be a valid day";
    errorMessage.style.display = "in-line";
  } else {
    // Clear the error if input is valid
    dayContainer.classList.remove("error");
    errorMessage.style.display = "none";
  }

  if (monthValue === "") {
    monthErrorMessage.innerHTML = "This Field is Required";
    monthErrorMessage.style.display = "block";
    monthContainer.classList.add("error");
    MonthResult.innerHTML = "<p><i><span>--</span> months</i></p>";
  } else if (monthValue < 1 || monthValue > 12) {
    monthContainer.classList.add("error");
    MonthResult.innerHTML = "<p><i><span>--</span> months</i></p>";
    monthErrorMessage.innerHTML = "Must be a valid month";
  } else {
    // Clear the error if input is valid
    monthContainer.classList.remove("error");
    monthErrorMessage.style.display = "none";
  }

  if (yearValue === "") {
    yearErrorMessage.innerHTML = "This Field is Required";
    yearErrorMessage.style.display = "block";
    yearContainer.classList.add("error");
    yearResult.innerHTML = "<p><i><span>--</span> years</i></p>";
  } else if (yearValue < 0 || yearValue > currentYear) {
    yearContainer.classList.add("error");
    yearErrorMessage.style.display = "block";
    yearResult.innerHTML = "<p><i><span>--</span> years</i></p>";
    yearErrorMessage.innerHTML = "Must be a valid year";
  } else {
    // Clear the error if input is valid
    yearContainer.classList.remove("error");
    yearErrorMessage.style.display = "none";
  }
}
