//Pseudocode

//1. propmt user to meet certain criteria 
    //prompt user how long they want the password to be from 1-128
        //var character count = "How long d o you want your password to be?"
            //number is a string then change it to a number
        //have to do 1 -129 in order to get the 128 characters
        //var password num = Math.floor(Math.random () * numbers.length
    //computer stores this information 
            //recieve and save this computer information 
//2. prompt user to choose differnt types of password characters
    //arrays that are empty that you can call to in 1 4 instead 1 
        //array methods 
        //prompt user to choose lowercase
            //use if then or if else statements 
        //store information of true or false AKA yes or no 
             //if user prompts yes computer then computer randomly chooses a letter that corresponds to lowercase number 
        //prompt user for uppercase letters 
        //store information of yes or no 
             //if user prompts yes computer then computer randomly chooses a letter that corresponds to uppercase number 
        //prompt user for prompt user for special characters 
            //if user prompts yes computer then computer randomly chooses a letter that corresponds to special characters 
        //store infromation of yes or no 
        //prompt user for numbers (0-9)
            //if user prompts yes computer then computer randomly chooses a letter that corresponds to number 
        //restart process if none selected 
            //recursive function  with a name 
            //store information 
//3.genrate a passwrd 
        //display the password

        //Pro


function generatePassword(){
    //TODO: your code goes here
  }
  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);