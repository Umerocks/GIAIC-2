/*
Coder Name      : SYED UMER ALI
Program Title   : More Conditions
*/

var personName = "Umer";
var thingName = "Laptop";
var cityNames  = ["karachi", "islamabad"];
var value1 = 10;
var value2 = 20;
var value3 = 30;

const food_1 = "qorma"
var food_2 = "karahi"
food_2 = "Lassi"

console.log("if personName is Umer, I predict True, else false");
console.log(personName === "Umer");
console.log(personName === "Zubair");

console.log("if thingName is Laptop, I predict True, else false");
console.log(thingName === "Table");
console.log(thingName === "Laptop");

console.log("if  FirstValue is > SecondValue, I predict True, else false");
console.log(value1 > value2);
console.log(value2 < value3);
console.log((value3 / value1) > 1);
console.log((value2 / value1) < 1);
console.log((value3 * value1) === 300);
console.log((value1 + value2) < (value3 - value2));

console.log("AND & OR Operators");
console.log((value1 > value2) && (value2 < value3));
console.log((value1 > value2) || (value2 < value3));
console.log(personName === "Umer" && thingName ==="Laptop");
console.log(personName === "Umer" && thingName ==="Chair");
console.log(personName === "Umer" || thingName ==="Chair");
console.log(personName === "Mudassir" || thingName ==="Table");
console.log(personName === "Mudassir" || thingName ==="Laptop");


let fruits4:string[] = ["Apple", "Mango", "Banana"];

console.log("Check Whether an Item is in the Array")
if(fruits4.includes("Mango")){
    console.log("Mango is in the Array");
}

console.log("Check Whether an Item is Not in the Array")
if(!fruits4.includes("Kiwi")){
    console.log("Kiwi is Not in the Array");
}
