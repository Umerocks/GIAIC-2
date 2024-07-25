
/*
Coder Name      : SYED UMER ALI
Program Title   : Functions
*/

function show_magicians_3(magicians: string[]): void {
    // magicians.forEach(magician => 
        console.log(magicians);
}

function make_great_3(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

// Array of magician's names
const magicians_3: string[] = ["David Blaine", "David Copperfield", "Penn Jillette"];

// Call make_great() with a copy of the array
const greatMagicians: string[] = make_great_3([...magicians_3]); // Using the spread operator to create a copy

// Call the function to show the original magicians
console.log("Original Magicians:");
show_magicians_3(magicians_3);

// Call the function to show the great magicians
console.log("\nGreat Magicians:");
show_magicians_3(greatMagicians);