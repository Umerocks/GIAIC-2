/*
Coder Name      : SYED UMER ALI
Program Title   : Ammending String Arrays
*/

let dinnerGuests : string[]= ["Mudassir", "Fahad", "Zubair", "Zia", "Imran", "Hammad"];
let dinnerInviteMessage = "You are cordially invited to join us on Dinner at our House on coming Friday";
let appologyMessage = ", I am really sorry, due to sudden changes in Hotel reservation, we would not be able to accomodate you on dinner with us!!"

// console.log("\n\t ******Revised Inv/tation******");

for(let i = 0; i< dinnerGuests.length; i++){
    console.log("Dear ",dinnerGuests[i], dinnerInviteMessage);
    }
    
console.log("\n\nUnfortunately!! We can manage to invite only TWO people for the dinner...")

while(dinnerGuests.length > 2){

    let removedGuests = dinnerGuests.pop();
    console.log("Dear ",removedGuests, appologyMessage);
}

for(let i = 0; i< dinnerGuests.length; i++){
    console.log("Dear ",dinnerGuests[i], dinnerInviteMessage);
    }

    dinnerGuests.pop();
    dinnerGuests.pop();

    console.log("Final Guest List : {");
    for(let i = 0; i< dinnerGuests.length; i++){
        console.log(dinnerGuests[i]), ",";
        }
        console.log("}");
