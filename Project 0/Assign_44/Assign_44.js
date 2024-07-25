/*
Coder Name      : SYED UMER ALI
Program Title   : Functions
*/
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    ingredients.forEach(function (item) { return console.log("- " + item); });
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments
makeSandwich("Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Swiss Cheese");
