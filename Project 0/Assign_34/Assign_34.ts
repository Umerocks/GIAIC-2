/*
Coder Name      : SYED UMER ALI
Program Title   : For Loop
*/


let pizzaList: string[] = ["Pepperoni", "Fajita", "BBQ"];

console.log("1. Printing Pizza Names List")
for(let i=0; i<pizzaList.length; i++){
    console.log(pizzaList[i]);
}

console.log("2. Printing a Sentence")

for(let i=0; i<pizzaList.length; i++){
    console.log(`I like ${pizzaList[i]} Pizza`);
}

console.log("\r\n I Love to eat BBQ Pizza. \n\r I eat BBQ Pizza couple of times a month.\n\r Sometimes I order BBQ Pizza at Home and sometimes I dine-in the Pizza Shop.\n\r I really Love the taste of BBQ Pizza.")
