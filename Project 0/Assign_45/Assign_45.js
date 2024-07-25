/*
Coder Name      : SYED UMER ALI
Program Title   : Functions
*/
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional properties
    options.forEach(function (option) {
        var key = option[0], value = option[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional properties
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the object to check if all information was stored correctly
console.log(myCar);
