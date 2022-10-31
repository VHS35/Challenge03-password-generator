// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //I want a window prompt to ask user length of password, no less than 8 and no more that 128

  var lengthPrompt = prompt("How long do you want your password to be?");
  
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Number must be between 8-128")
    return;
  } 
  if (isNaN(lengthPrompt)){
    alert("That is not a number!")
    return;
  }
  var passwordCriteria =  " ";
  var symbols = "!#$&()*+,-./:;<=>?@[]^_`{|}~";
  var number ="0123456789";
  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase= "abcdefghijklmnopqrstuvwxyz";
 
//question prompts to as user, I want the answers to add from the variables
 
  var symbolPrompt = confirm("Do you want special symbols in your password?")
  if (symbolPrompt === true){
    passwordCriteria += symbols;
  }
 var numberPrompt = confirm("Do you want numbers in your password?");
  if (numberPrompt === true){
    passwordCriteria += number;
  }
  var lowerCasePrompt = confirm("Do you want lowercase letters in your password?");
  if (lowerCasePrompt === true){
    passwordCriteria += lowerCase;
  }
 var upperCasePrompt = confirm("Do you want uppercase letters in your password?");
  if (upperCasePrompt === true){
    passwordCriteria += upperCase;
  };
var userInput = " ";
// I want the password to generate randomly based on user input

  for (var i = 0; i < (lengthPrompt); i++) {
  
    var passwordStrings= Math.floor(Math.random()* passwordCriteria.length);
    userInput += passwordCriteria[passwordStrings];
   }
  return userInput
}





