/*
Coder Name      : SYED UMER ALI
Program Title   : If Statement
*/
var userNames = ["admin", "guest", "umer", "zia", "mudassir"];
var currentUser = "admin";
if (userNames.includes(currentUser) && currentUser === "admin")
    console.log("Hellow admin, would you like to see a status report?");
else if (userNames.includes(currentUser))
    console.log("Hello ".concat(currentUser, ". Thank you for loggin in again."));
currentUser = "umer";
if (userNames.includes(currentUser) && currentUser === "admin")
    console.log("Hellow admin, would you like to see a status report?");
else if (userNames.includes(currentUser))
    console.log("Hello ".concat(currentUser, ". Thank you for loggin in again."));
