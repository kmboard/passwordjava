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
  
  // Set length to setInteger()
    // var lnt lengthEl {
    //   toString.valueOf(min(8),max(128));
    }

    // if user doesnt pick a number
         if (isNaN(lengthEL)) {
          return 'Alert Alert Alert, pick a numbaaa!';
        }

  var userLower = confirm("Would you like to incluse lowercase?");
  var userNumbers = confirm("Would you like to include numbers?");
  var userUpper = confirm("Would you like to include uppercase letters?");
  var userSymbols = confirm("Would you like to include special characteristics?");

  //if user picks nothing
  if (!userLower && !userNumbers && !userUpper && !userSymbols) {
    return "Pick something!";
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
  console.log(prompts)
  var chosenChars = []
  var finalPass = []


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
 
  for (let i = 0; i < promptAnswers.length; i++) {
    var randomChar = randomElement(chosenChars);
    finalPass.push(randomChar)
  }
  console.log(finalPass)
 return finalPass.join(',')
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


