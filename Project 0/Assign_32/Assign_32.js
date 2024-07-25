/*
Coder Name      : SYED UMER ALI
Program Title   : If Statement
*/
var currentUsers = ["Umer", "zia", "Mudassir", "fahad", "faraz"];
var newUsers = ["UMER", "zubair", "mudassir", "hammad", "talha"];
for (var i = 0; i < newUsers.length; i++) {
    var thisUser = newUsers[i];
    console.log("\n\rChecking User-Name ".concat(thisUser));
    var userNameFound = false;
    for (var j = 0; j < currentUsers.length; j++) {
        if (currentUsers[j].toLowerCase() === thisUser.toLowerCase()) {
            userNameFound = true;
            console.log("You will need to enter a new user-name");
        }
    }
    if (userNameFound === false)
        console.log("this user-name is available");
}
