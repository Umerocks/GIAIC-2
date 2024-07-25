/*
Coder Name      : SYED UMER ALI
Program Title   : Using String Arrays and Message
*/

let dinnerGuests_02 : string[]= ["Mudassir", "Fahad", "Zubair"];
let dinnerInviteMessage_02 = "You are cordially invited to join us on Dinner at our House on coming Friday";

for(var i=0; i<dinnerGuests_02.length; i++){
console.log("Dear ",dinnerGuests_02[i], dinnerInviteMessage_02);
}

console.log("Unfortunately Mr. ", dinnerGuests_02[1]," wouldn't make it.")
dinnerGuests_02[1] = "Farooq";

console.log("\n\t ********Revised Invitation******")

for(var i=0; i<dinnerGuests_02.length; i++){
    console.log("Dear ",dinnerGuests_02[i], dinnerInviteMessage_02);
    }

