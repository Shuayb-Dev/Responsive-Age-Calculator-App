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
function errorCheck() {
  let dayContainer = document.getElementById("day");
  let dayValue = dayContainer.value;
  let errorMessage = document.getElementById("error-message");

  if (dayValue === "") {
    errorMessage.innerHTML = "This Field is Required";
    errorMessage.style.display = "block";
    dayContainer.classList.add("error");
  } else if (dayValue < 1 || dayValue > 31) {
    dayContainer.classList.add("error");
    errorMessage.innerHTML = "Must be a valid day";
    errorMessage.style.display = "in-line";
  } else {
    // Clear the error if input is valid
    dayContainer.classList.remove("error");
    errorMessage.style.display = "none";
  }
}
