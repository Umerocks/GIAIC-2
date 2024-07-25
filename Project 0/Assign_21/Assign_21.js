/*
Coder Name      : SYED UMER ALI
Program Title   : Creating Object
*/
var Country = [
    {
        name: "USA",
        capital: "Washington D.C.",
        population: "331000000",
        language: "English"
    },
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: "250M",
        language: "Urdu"
    },
    {
        name: "Turkey",
        capital: "Istanbul;",
        population: "100M",
        language: "Turkish"
    },
];
console.log("----The Countries and their details---");
for (var _i = 0, Country_1 = Country; _i < Country_1.length; _i++) {
    var ctry = Country_1[_i];
    console.log("***************************");
    console.log("Name:", ctry.name);
    console.log("Capital:", ctry.capital);
    console.log("Population:", ctry.population);
    console.log("Language:", ctry.language);
}
// console.log("First Country Features Are: ", Country);
