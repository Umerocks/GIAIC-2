/*
Coder Name      : SYED UMER ALI
Program Title   : If Statement
*/


let currentUsers :string[] = ["Umer", "zia", "Mudassir", "fahad", "faraz"];
let newUsers :string[]     = ["UMER", "zubair", "mudassir", "hammad", "talha"];

for(let i=0; i< newUsers.length; i++){
    let thisUser = newUsers[i];
    console.log(`\n\rChecking User-Name ${thisUser}`);

    let userNameFound: boolean = false;
    for(let j=0; j< currentUsers.length; j++){
        if(currentUsers[j].toLowerCase() === thisUser.toLowerCase()){
            userNameFound = true;
            console.log("You will need to enter a new user-name")
        } 
    }
    if(userNameFound === false) console.log("this user-name is available")
}
