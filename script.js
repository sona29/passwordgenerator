var specialChars = "!@#$%^&*(){}[]=<>/,.|~?";
var numbers ="0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Function to generate password
var generatePassword = function() {
  var specialChars = "!@#$%^&*(){}[]=<>/,.|~?";
  retVal = "";

  var passwordLength = window.prompt("Password Length");
  //If password length is not chosen
  if(!passwordLength){
    window.alert("Password must have specific length");
    return;
  }
  //if password length is less than 8
  if(passwordLength<8){
    window.alert("Password cannot be less than 8 characters");
    return;
  }

  //if password length is greate than 128
   if(passwordLength>128)
    {
      window.alert("Password cannot be greater than 128 characters");
    return;
    }

    var specialCharsConfirm = window.confirm("Do you want special chars?");
    var numbersConfirm = window.confirm("Do you want numbers?");
    var lowerCaseConfirm = window.confirm("Do you want lower case alphabets?");
    var upperCaseConfirm = window.confirm("Do you want upper case alphabets?");
    
    //If no other options for password is chosen
    if(!specialCharsConfirm && !numbersConfirm && !lowerCaseConfirm && !upperCaseConfirm)
    {
      window.alert("Must choose atleast one condition");
    return;
    }

    //if only special characters are chosen  
    else if(specialCharsConfirm && !numbersConfirm && !lowerCaseConfirm && !upperCaseConfirm){     
      for (var i = 0, n = specialChars.length; i < passwordLength; ++i) {
        retVal += specialChars.charAt(Math.floor(Math.random() * n));
      }
    console.log("1st" +retVal);      
    }


    //if special chars and numbers are chosen
    else if(specialCharsConfirm && numbersConfirm && !lowerCaseConfirm && !upperCaseConfirm){
      totalLength = specialChars.concat(numbers);
      console.log(totalLength);
      for (var i = 0, n = totalLength.length; i < passwordLength; ++i) {
        retVal += totalLength.charAt(Math.floor(Math.random() * n));
      }
    console.log(retVal);
    }
   
}

generatePassword();


