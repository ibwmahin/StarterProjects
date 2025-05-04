const passwordBox = document.getElementById("password");
const length = 12;

// password creation element
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "12345678890";
const symbols = "!@#$%^&*()_+{}[]/><-=";
const allChars = upperCase + lowerCase + number + symbols;

function createPassworrd() {
  //this is an empty password which will create password's after the entry
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copy() {
  passwordBox.select();
  document.execCommand("copy");
}
