// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// define variables
var lengthEl = document.getElementById('length');
var uppercaseEl = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X', 'Z'];
var lowercaseEl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'q', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersEl = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolsEl = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// Prompts
function userPrompts() {
  var length = prompt("How many charaters? Choose number between 8 and 128");

  if (
    isNaN(parseInt(length)) ||
    parseInt(length) < 8 ||
    parseInt(length) > 128
  ) 

  {
   alert ("Pick a number between 8 and 128!!")
   userPrompts ()
  }

  var userLower = confirm("Would you like to incluse lowercase?");
  var userNumbers = confirm("Would you like to include numbers?");
  var userUpper = confirm("Would you like to include uppercase letters?");
  var userSymbols = confirm("Would you like to include special characteristics?");

  console.log (length,userLower, userNumbers, userUpper, userSymbols)


  if (!userLower && !userNumbers && !userUpper && !userSymbols) {
    console.log ("pick something")
    alert ("Must pick something!");
    userPrompts ()
  }

  var promptObj = {
    length,
    userLower,
    userUpper,
    userNumbers,
    userSymbols,
  }
  return promptObj;
}

function randomElement(arr){
  var randI = Math.floor(Math.random() * arr.length)
  var randEl = arr[randI];
  return randEl
}

// creates function
function generatePassword() {
  var promptAnswers = userPrompts();
  console.log("promptsAnswers");
  var chosenChars = []

  if (promptAnswers.userLower){
    chosenChars += chosenChars.concat(lowercaseEl)
    console.log(chosenChars)
  }

  if (promptAnswers.userUpper){
    chosenChars += chosenChars.concat(uppercaseEl)
    console.log(chosenChars)
  }

  if (promptAnswers.userNumbers){
      chosenChars += chosenChars.concat(numbersEl)
      console.log(chosenChars)
  }

  if (promptAnswers.userSymbols){
    chosenChars += chosenChars.concat(symbolsEl)
    console.log(chosenChars)
  }

  var lengthEl = length;
 
  function lengthEl ()  {
  for (let i = 0; i < length; i++) {
    var randomChar = randomChar + chosenChars.concat(Math.floor(Math.random() * length));
    // finalPass.push(randomChar)
  
  }

}
    
  return chosenChars;
  console.log ("final pass");

  generatePassword()
  
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

