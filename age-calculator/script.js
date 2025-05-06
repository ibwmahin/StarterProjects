let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
  if (!userInput.value) {
    result.innerHTML = "Please select your birthdate.";
    return;
  }

  let birthdate = new Date(userInput.value);
  let today = new Date();

  let d1 = birthdate.getDate();
  let m1 = birthdate.getMonth() + 1;
  let y1 = birthdate.getFullYear();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let y3 = y2 - y1;
  let m3 = m2 - m1;
  let d3 = d2 - d1;

  if (d3 < 0) {
    m3--;
    // Get days in previous month
    let prevMonth = m2 - 1 === 0 ? 12 : m2 - 1;
    let prevMonthYear = prevMonth === 12 ? y2 - 1 : y2;
    d3 += getDaysInMonth(prevMonthYear, prevMonth);
  }
  if (m3 < 0) {
    y3--;
    m3 += 12;
  }

  if (y3 < 0) {
    result.innerHTML = "Please select a valid birthdate.";
    return;
  }

  result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old.`;
}

function getDaysInMonth(year, month) {
  // month is 1-based (1 = January)
  return new Date(year, month, 0).getDate();
}
