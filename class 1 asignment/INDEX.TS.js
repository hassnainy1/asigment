var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Excercise 01
console.log("Hello ALI, would you like to learn some Python today?");
//Excercise02
console.log("One of the biggest curses from which India is suffering - I do not say that other countries are free from it, but I think our condition is much worse - is bribery and corruption. ...");
//Excercise03
console.log("Knoiwledge is power    sir frances bacon");
//Excercise04
// calculation 
console.log(6 + 2);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Excersise 05
var number;
7;
console.log('var number: number; 7');
//Excersice 06)
console.log('Hassnain ali 07/juuly/2023');
//Excersice 07
//FRIENDS LIST
console.log("DANIYAL");
console.log("SHAIS");
console.log("RIDA");
console.log("FARHAN");
console.log("WASIF");
//Excersice 08
console.log("GREETINGS DANIYAL");
console.log("GREETINGS SHAIS");
console.log("GREETINGS RIDA");
console.log("GREETINGS FARHAN");
console.log("GREETINGS WASIF");
//EXCERSICE 09
console.log("I WOULD LIKE TO OWNER A SUPRA CAR INSHA ALLAH");
//Excersice 1o
//GUEST LIST 
//INVITAION FOR DINNER 
console.log("GREETINGS AHMED, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME ");
console.log("GREETINGS FAWAD, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME ");
console.log("GREETINGS HASAN, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME ");
//Excersice 11
//chaning guest list
console.log("GREETINGS AHMED, today dinner cancel . i am going out to of city ");
//Excercise 12
//More guest 
//More invitation
console.log("GREETINGS FAWAD, I WOULD LIKE TO INVITE DINNER TONIGHT AT LALQILA ");
console.log("GREETINGS HASAN, I WOULD LIKE TO INVITE DINNER TONIGHT AT LALQILA");
console.log("GREETINGS ASIF, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME LALQILA");
console.log("GREETINGS OWAIS, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME LALQILA");
console.log("GREETINGS SHER ALI, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME LALQILA");
//Excercise 13
//shriking guest list
console.log("GREETINGS FAWAD, I WOULD LIKE TO INVITE DINNER TONIGHT AT LALQILA ");
console.log("GREETINGS HASAN, I WOULD LIKE TO INVITE DINNER TONIGHT AT LALQILA");
console.log("GREETINGS ASIF, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME LALQILA");
console.log("GREETINGS TAYYAB, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME LALQILA");
console.log("GREETINGS OWAIS, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME LALQILA");
console.log("GREETINGS SHER ALI, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME LALQILA");
//Excercise 14
//invite two guest 
console.log("GREETINGS FAWAD, I WOULD LIKE TO INVITE DINNER TONIGHT AT LALQILA ");
console.log("GREETINGS ASIF, I WOULD LIKE TO INVITE DINNER TONIGHT AT HOME LALQILA");
//Excersice 15
// five places visit
var placestovisits = ['madina', 'makkah', 'kpk', "afghanistann", 'kashmir'];
console.log("orignal orders");
console.log(placestovisits);
console.log("\nalphabetical(without modifying the orignal list");
console.log(__spreadArray([], placestovisits, true).sort());
console.log("\nstill in orignal series");
console.log(placestovisits);
console.log("\nreverse alphabetical orders (without modifying the orignal list0");
console.log(placestovisits);
console.log("\nstill in orignal order");
console.log(placestovisits);
console.log("\nreversed order");
placestovisits.reverse();
console.log(placestovisits);
//Excersice 16
//message
console.log("GREETINGS FAWAD, I WOULD LIKE TO INVITE DINNER TONIGHT AT LALQILA ");
//Excercise 17
//countries list
var cities = ["New York", "Paris", "Tokyo", "London", "Sydney", "Rome", "Mumbai", "Cairo", "Beijing", "Rio de Janeiro"];
// Printing the list of cities
console.log(cities);
// Create an array of country objects
var countries = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331002651,
        language: "English",
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
        language: "French",
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 126476461,
        language: "Japanese",
    },
];
// Print the list of country objects
console.log(countries);
//Excersice 19
var city = ["New York", "Paris", "Tokyo", "London", "Sydney", "Rome", "Mumbai", "Cairo", "Beijing", "Rio de Janeiro"];
// Accessing an invalid index to produce an error
console.log(cities[10]); // Intentional error: using index 10 which is out of bounds
// Printing the list of cities
console.log(cities);
//excersice 20
var CAR = 'subaru';
console.log("Is CAR == 'subaru'? I predict True.");
console.log(CAR == 'subaru'); // Prediction: True
console.log("Is CAR == 'honda'? I predict False.");
console.log(CAR == 'honda'); // Prediction: False
console.log("Is CAR != 'ford'? I predict True.");
console.log(CAR != 'ford'); // Prediction: True
console.log("Is CAR != 'subaru'? I predict False.");
console.log(CAR != 'subaru'); // Prediction: False
console.log("Is CAR === 'subaru'? I predict True.");
console.log(CAR === 'subaru'); // Prediction: True
console.log("Is CAR === 'Subaru'? I predict False.");
console.log(CAR === 'Subaru'); // Prediction: False
console.log("Is CAR !== 'subaru'? I predict False.");
console.log(CAR !== 'subaru'); // Prediction: False
console.log("Is CAR !== 'ford'? I predict True.");
console.log(CAR !== 'ford'); // Prediction: True
console.log("Is CAR.length > 5? I predict False.");
console.log(CAR.length > 5); // Prediction: False
console.log("Is CAR.length <= 7? I predict True.");
console.log(CAR.length <= 7); // Prediction: True
//Excersice 21
let;
void ;
'John';
console.log("Is name equal to 'John'? I predict True.");
console.log(void '' === '', 'John'); // Prediction: True
console.log("Is name not equal to 'Jane'? I predict True.");
console.log(void '' !== '', '"john'); // Prediction: True
console.log("Is name equal to 'john'? I predict False.");
console.log(void '' === '', 'john'); // Prediction: False
console.log("Is name not equal to 'John'? I predict False.");
console.log(void '' === '', 'John'); // Prediction: False
let text = 'Hello World';

console.log("Does the lowercase version of text equal 'hello world'? I predict True.");
console.log(text.toLowerCase() === 'hello world'); // Prediction: True

console.log("Does the lowercase version of text equal 'HELLO WORLD'? I predict False.");
console.log(text.toLowerCase() === 'HELLO WORLD'); // Prediction: False

let number = 10;

console.log("Is number greater than 5? I predict True.");
console.log(number > 5); // Prediction: True

console.log("Is number less than or equal to 20? I predict True.");
console.log(number <= 20); // Prediction: True
console.log("Is number equal to 7? I predict False.");
console.log(number === 7); // Prediction: False

console.log("Is number not equal to 10? I predict False.");
console.log(number !== 10); // Prediction: False

let x = 5;
let y = 10;

console.log("Is x greater than 3 and y less than 15? I predict True.");
console.log(x > 3 && y < 15); // Prediction: True

console.log("Is x greater than 7 or y greater than 12? I predict False.");
console.log(x > 7 || y > 12); // Prediction: False

let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple')); // Prediction: True

console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape')); // Prediction: False

let colors = ['red', 'blue', 'green'];

console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow')); // Prediction: True

console.log("Is 'blue' not in the colors array? I predict False.");
console.log(!colors.includes('blue')); // Prediction: False

//excersice 22
let alien_color = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
