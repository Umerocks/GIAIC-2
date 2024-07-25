/*
Coder Name      : SYED UMER ALI
Program Title   : Using String Arrays and Message
*/

let dinnerGuests : string[]= ["Mudassir", "Fahad", "Zubair"];
let dinnerInviteMessage = "You are cordially invited to join us on Dinner at our House on coming Friday";

for(var i=0; i<dinnerGuests.length; i++){
console.log("Dear ",dinnerGuests[i], dinnerInviteMessage);
}

