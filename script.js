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

        //Pro


function generatePassword(){
//TODO: your code goes here
//ask user how long they want the password to be 
    var char = window.prompt ("How long would you like your character count be (1-128)?");
    
    var question1 = window.confirm ("Would you like to use lowercase letters in yor password?");
        const lowercase = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const option1 = lowercase[Math.floor(Math.random() * lowercase.length)];
    var question2 = window.confirm ("Would you like to use uppercase letters in your password?");
        const uppercase = ["A", 'B', "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M','N', 'O',, 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const option2 = uppercase[Math.floor(Math.random()* uppercase.length)];
    var question3 = window.confirm ("Would you like special characters in your password?");
        const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~'];
        const option3 = special[Math.floor(Math.random()* special.length)];
    var question4 = window.confirm ("Would you like numbers in your password?")
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const option4 = numbers[Math.floor(Math.random()* numbers.length)];





























// var question4 = "Would you like numbers?";



// //1. prompt user to choose how long the password should be
// prompt("How long do you want your characters to be? Choose from 1 to 128 characters.");
// if (window.confirm( "Would you like to use lowercase letters?"=== true)) {
//     const option1 = lowercase [Math.floor(Math.random()* lowercase.length)];

//   }

//     const uppercase = ["A", 'B', "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M','N', 'O',, 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//     const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
//     const numbers = [];
//     prompt("How long do you want your characters to be? Choose from 1 to 128 characters.");
// //computer randomly pickes the amount to choose 


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