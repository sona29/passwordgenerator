var specialChars = "!@#$%^&*(){}[]=<>/,.|~?";
var numbers ="0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Function for generating password
var generatePassword = function() {
  var passwordLength = window.prompt("Password Length");
  
  //if password length is not entered
  if(!passwordLength){
    window.alert("Password must have specific length");
    return;
  }

  //if password length is less than 8
  if(passwordLength<8){
    window.alert("Password cannot be less than 8 characters");
    return;
  }

    //if password length is greater than 128
   if(passwordLength>128)
    {
      window.alert("Password cannot be greater than 128 characters");
    return;
    }
 
    //Confirming other conditions
    var specialCharsConfirm = window.confirm("Do you want special chars?");
    var numbersConfirm = window.confirm("Do you want numbers?");
    var lowerCaseConfirm = window.confirm("Do you want lower case alphabets?");
    var upperCaseConfirm = window.confirm("Do you want upper case alphabets?");

    console.log(specialCharsConfirm);
    console.log(numbersConfirm);
    console.log(lowerCaseConfirm);
    console.log(upperCaseConfirm);
}


