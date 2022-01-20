// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthEl = document.getElementById('length');
var uppercaseEl = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','X','Z'];
var lowercaseEl = ['a','b','c','d','e','f','g','h','i','j','q','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbersEl = ['0','1','2','3','4','5','6','7','8','9'];
var symbolsEl =  ['@', '%', '+', '\\', '/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    function generatePassword() {
     console.log("button pushed!");
      var generate = window.prompt("How many charaters? Choose number between 8 and 128");
        confirm("Would you like to include numbers?");
        //   if (!number)
        //     var numbers = Math.floor(math.random());
        //    } else if { 
        //      return confirm("Would you like to include lowercase letters?");
        //    }
 
  
  // confirm("Would you like to include uppercase letters?");
  // confirm("Would you like to include special characteristics?")

  return generate;

          }

  var passwordText = document.querySelector("#password");


  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


