function calculateAge() {
  // Current year
  let today = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();

  // Get birth date values
  let birthDay = document.getElementById("day").value;
  let birthMonth = document.getElementById("month").value;
  let birthYear = document.getElementById("year").value;

  // Calculate age in years
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
