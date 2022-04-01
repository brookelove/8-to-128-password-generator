//Pseudocode

//1. propmt user to meet certain criteria 
    //prompt user how long they want the password to be from 1-128
        //var character count = "How long do you want your password to be?"
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
function generatePassword(){
//TODO: your code goes here
//ask user how long they want the password to be 
    var char = window.prompt ("How long would you like your characters count be (8-128)?"); 
//ask the user each question of lettter, numbers and characters 
//make empty array for the array filler?
    var question1 = window.confirm ("Would you like to use lowercase letters in yor password?");
        const lowercase = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var question2 = window.confirm ("Would you like to use uppercase letters in your password?");
         const uppercase = ["A", 'B', "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M','N', 'O',, 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var question3 = window.confirm ("Would you like special characters in your password?");
         const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~'];
    var question4 = window.confirm ("Would you like numbers in your password?")
         const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var result = [];
//if user inputs choice and chooses 

//if they select lowercase then add every lowercase letter to the empty array above 
//the function of result.push (...lowercase) to be cleaner=
    
    if (question1) {
        result = result.concat(lowercase);
     }

     if (question2) {
         result = result.concat(uppercase);
     }

     if (question3) {
         result = result.concat(special);
     }

     if (question4) {
         result = result.concat(numbers);
     }

    var genere = [];
    
    //recursive function in order to prompt the user to pick something that woiudl start the proccess over 
    if (!question1 && !question2 && !question3 && !question4) {
        alert("You have to choose something. Start Over.")
        return null;
    }

    //in order to make the random else 
     for (let x = 0; x < char; x++) {
        genere.push(result[(Math.floor(Math.random() * result.length))]);
     }
     

     return genere.join("").toString();
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