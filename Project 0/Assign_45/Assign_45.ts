
/*
Coder Name      : SYED UMER ALI
Program Title   : Functions
*/

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allows arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional properties
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional properties
const myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the object to check if all information was stored correctly
console.log(myCar);