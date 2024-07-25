/*
Coder Name      : SYED UMER ALI
Program Title   : Functions
*/


function makeSandwich(...ingredients: string[]): void {
    console.log("Making a sandwich with the following items:");
    ingredients.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!");
}

// Call the function with different number of arguments
makeSandwich("Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Swiss Cheese");