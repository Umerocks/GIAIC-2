/*
Coder Name      : SYED UMER ALI
Program Title   : Sorting String Arrays
*/


let siteNames : string[]= ["Turkey", "KAABA", "Masjid-e-Nabwi (pbuh)", "Switzerland", "NASA"];
let tempArray : string[] = [];

for(let i=0; i< siteNames.length; i++){
tempArray[i] = siteNames[i];
}

console.log("Original Array: ", siteNames);

tempArray.sort();
console.log("Alphabetically Sorted Array: ", tempArray);
console.log("Original Array: ", siteNames);
console.log("*********************************");

console.log("Original Array= ", siteNames);
for(var i=0; i< siteNames.length; i++){
    tempArray[i] = siteNames[i];
    }

    tempArray.sort();   //Aplhabetically arranged
    tempArray.reverse(); //puts in reverse order
    console.log("Alphabetically Reverse Sorted Array: ", tempArray);
    console.log("Original Array: ", siteNames);
    console.log("*********************************");
    
    siteNames.reverse();
    console.log("Reverse Order Array: ", siteNames);
    siteNames.reverse();
    console.log("Undo Reverse Order Array: ", siteNames);
    console.log("*********************************");

    siteNames.sort();
    console.log("Alphabetically Sorted Original Array: ", siteNames);
    console.log("*********************************");

    siteNames.reverse();
    console.log("Alphabetically Reverse Sorted Original Array: ", siteNames);
    console.log("*********************************");