// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("button pushed!");
  var gereratePassword = window.prompt("How many charaters?");
  alert("Would you like to include numbers?");
  alert("Would you like to include lowercase letters?");
  alert ("Would you like to include uppercase letters?");
  alert ("Would you like to include special characteristics?")

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = ""
  var length = 12
  var charset = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var index = Math.floor(Math.random() * characters);


  passwordText.value = password;

  return password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
