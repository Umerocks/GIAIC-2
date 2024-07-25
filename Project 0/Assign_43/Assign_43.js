/*
Coder Name      : SYED UMER ALI
Program Title   : Functions
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians_3(magicians) {
    // magicians.forEach(magician => 
    console.log(magicians);
}
function make_great_3(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
// Array of magician's names
var magicians_3 = ["David Blaine", "David Copperfield", "Penn Jillette"];
// Call make_great() with a copy of the array
var greatMagicians = make_great_3(__spreadArray([], magicians_3, true)); // Using the spread operator to create a copy
// Call the function to show the original magicians
console.log("Original Magicians:");
show_magicians_3(magicians_3);
// Call the function to show the great magicians
console.log("\nGreat Magicians:");
show_magicians_3(greatMagicians);
