
/*
Coder Name      : SYED UMER ALI
Program Title   : Functions
*/

// Array of magician's names
let magicians_2: string[] = ["David Blaine", "David Copperfield", "Penn Jillette"];

function show_magicians_2(magicians_2: string[]): void {
        console.log(magicians_2);
}

function make_great(magicians_2: string[]): void {
    for (let i = 0; i < magicians_2.length; i++) {
        magicians_2[i] = "the Great " + magicians_2[i];
    }
}


// Call make_great() to modify the array
make_great(magicians_2);

// Call the function to show the modified magicians
show_magicians_2(magicians_2);