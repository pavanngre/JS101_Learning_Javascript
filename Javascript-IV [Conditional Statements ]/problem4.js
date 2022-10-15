//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_user = "xyz@gmail.com";
let database_pass = "abc@123";
let user="xyz@gmail.com";
let pass="123abc";
if(database_user == user) 
{
  if(database_pass == pass){
    console.log("Login Success");
  }
  else
  {
    console.log("incorrect password");
  }
  
}
else {
  console.log("Wrong");
}


