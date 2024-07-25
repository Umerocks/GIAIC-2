/*
Coder Name      : SYED UMER ALI
Program Title   : Using String Arrays and Message
*/
var dinnerGuests = ["Mudassir", "Fahad", "Zubair"];
var dinnerInviteMessage = "You are cordially invited to join us on Dinner at our House on coming Friday";
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ", dinnerGuests[i], dinnerInviteMessage);
}
console.log("I am glad to inform you that we have found a bigger table for dinner!! So, we will have some more guests with us at dinner...");
dinnerGuests.unshift("Zia");
dinnerGuests.splice(Math.ceil(dinnerGuests.length / 2), 0, "Imran");
dinnerGuests.push("Hammad");
console.log("\n\t ******Revised Inv/tation******");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ", dinnerGuests[i], dinnerInviteMessage);
}
