/*
Coder Name      : SYED UMER ALI
Program Title   : Ammending String Arrays
*/
var dinnerGuests = ["Mudassir", "Fahad", "Zubair", "Zia", "Imran", "Hammad"];
var dinnerInviteMessage = "You are cordially invited to join us on Dinner at our House on coming Friday";
var appologyMessage = ", I am really sorry, due to sudden changes in Hotel reservation, we would not be able to accomodate you on dinner with us!!";
// console.log("\n\t ******Revised Inv/tation******");
for (var i_1 = 0; i_1 < dinnerGuests.length; i_1++) {
    console.log("Dear ", dinnerGuests[i_1], dinnerInviteMessage);
}
console.log("Unfortunately!! We can manage to invite only TWO people for the dinner...");
while (dinnerGuests.length > 2) {
    var removedGuests = dinnerGuests.pop();
    console.log("Dear ", removedGuests, appologyMessage);
}
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ", dinnerGuests[i], dinnerInviteMessage);
}
dinnerGuests.pop();
dinnerGuests.pop();
console.log("Final Guest List : {");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log(dinnerGuests[i]), ",";
}
console.log("}");
