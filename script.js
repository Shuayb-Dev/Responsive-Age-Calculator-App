function calculateAge() {
  // Current year
  let today = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();

  // Get birth date values
  let birthDay = document.getElementById("day").value;
  let birthMonth = document.getElementById("month").value;
  let birthYear = document.getElementById("year").value;
  //We getting active again
  let ageYear = today - birthYear;
  let ageMonth = month - birthMonth;
  let ageDay = day - birthDay;

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
