// chapter-1-alert.js

// wite a script to display an alert saying "welcome to javascript!"

alert("Welcome to JavaScript!")



// // Chapter-2 variable for string

// //Declare a variable greeting and assign it the string "Hello, user!"

var greeting = "Hello, user!";
// console.log(greeting)
alert(greeting);




// chapter-3 vairable for number

// Declare a variable userage and assign it your age as a number.
// add 5 to userage and store it in another variable called futureage.

var userage = 20
var futureage = userage + 5;
console.log(futureage);
window.alert(futureage);



// Chapter-4 variable name legal illegal

// write 3 valid names and 3 valid onse .
// explain why the invalid one are incorrect ( in comments)

//Valid names

var Username = "TABRAIZ";
 var age1 = 25
 var  $price = 100
console.log(Username, age1, $price);

// invalid names

var name = "John"; 
var username = "Doe";
var Var = "test";



// Chapter-5 math expressions

// declare two variables, a = 8, b = 2.use Addition , Subtraction, Multiplication, Division, 
// and Multiplication, Division, and modulus on them and show results using alert.

var a = 8
var b = 2

alert("Addition(a + b) = " + (a + b));
alert("Subtraction(a - b) = " + (a - b));
alert("Multiplication(a * b) = " + (a * b));
alert("Division(a / b) = " + (a / b));
alert("Modulus(a % b) = " + (a % b));

console.log("Addition(a + b) = " + (a + b));
console.log("Subtraction(a - b) = " + (a - b));
console.log("Multiplication(a * b) = " + (a * b));
console.log("Division(a / b) = " + (a / b));
console.log("Modulus(a % b) = " + (a % b));




// Chapter-6 math unfamiliar

// use num++ and --num on a variable num=10 and display its value after each operation.

var num = 10

alert("value after this num++:" + (num++));

alert("value after this --num:" + (--num));




// Chapter-7 math eliminating

// write two expressions using parentheses to force different evaluation orders.
// log both results to the console.

var result1 = (2 + 3) * 4; 
console.log("result1:", result1); 

var result2 = 2 + 3 * 4;
console.log("result2:", result2);




// Chapter-8 concatenating text string

// create a variable username = "alex" and another string: "hello, " + username + " !". 
// display it using alert.

var username = "alex";

var message = "hello, " + username + " !";

alert(message);
console.log(message);



// Chapter-9 Prompt

//prompt the user to enter their name. greet them using the entered name in an alert. 

var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "! ")




// Chapter-10 if Satements


//prompt for a password . if it matches "letmein" , alert "acccess granted" . 

var password = prompt("Enter your password:");

if (password === "letmein") {
    alert("Access granted");
}else {
    alert("Access denied");
}




// Chapter-11 comparison

// compare two number using >, < , === ,  !== .
// Output true / false results 
// using alert.

var num1 = 10
var num2 = 5

alert("chap-11 num1 > num2 ? " + (num1 > num2))
alert("chap-11 num1 < num2 ? " + (num1 < num2))

alert("chap-11 num1 === num2 ? " + (num1 === num2))
alert("chap-11 num1 !== num2 ? " + (num1 !== num2))

console.log("chap-11 num1 > num2 ? " + (num1 > num2))
console.log("chap-11 num1 < num2 ? " + (num1 < num2))
console.log("chap-11 num1 === num2 ? " + (num1 === num2))
console.log("chap-11 num1 !== num2 ? " + (num1 !== num2))




// Chapter-12 if else and else if


// Prompt the using to guess a number respond with
// "too low" , "to high" , or "correct" 

var correctNumber = 7;

var userGuess = prompt("Guess a number between 1 and 10:")

userGuess = parseInt(userGuess)

if(userGuess < correctNumber) {
    alert("Too low");
} else if(userGuess > correctNumber) {
    alert("Too high");
} else {
    alert("Correct!");
}
;




// Chapter-13 testing sets of condition

// Write an if condition that checks if a user 
// is over 18 * and * has a valid id . if true , alert
// "you may enter"

var age = 20
var hasID = true

if (age > 18 && hasID === true) {
    alert("You may enter");
} else {
    alert("You may not enter");
}




// Chapter-14 if statement 


// prompt for username and password 
// check both using nested if statements
// and display appropriate messages.

var username = prompt("Enter your username:");

if (username === "admin") {

    var password = prompt("Enter your password:");

    if (password === "1234") {
        alert("login successful");
    } else {
        alert("Incorrect password");
    }
} else {
    alert("username not found");
}



// Chapter-15

// Create an array of 5 favorite fruits. alert the third fruite . 

let fruite = ["Apple", "Banana", "Cherry", "Date", "mango"];
alert(fruits[2]); 




// Chapter-16 array adding and removing

// add kivi to the end of the fruit aray using .push() and remove the first fruit using
// shift() .  

let fruites = ['banana', 'apple', 'orange', 'mango'];
fruit.push('kiwi');

fruit.shift();
console.log(fruit); 




// Chapter-17 array -removing, inserting , and extracting

// use . splice() to remove second item from your fruit array and insert "peach" and "plum"
// in its place. 

var fruits = ["apple", "banana", "orange", "grape", "kiwi"];

fruits.splice(1, 1, "peach", "plum");

console.log(fruits); 




// Chapter-18 for loops

// loop trough your fruit array and alert 
// each fruit. 




// Chapter-19 for loops flags boooleans , array length

// ask user to enter a fruit name. check if it 
// exists in the fruit array . alert "found" or "not found" using a flag. 

let fruit = ["apple", "banana", "orange", "grape", "kiwi"];
let userfruit = prompt("Enter a fruit name:").toLocaleLowerCase();

let found = false;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === userfruit) {
        found = true;
        break; 
    }
}
if (found) {
    alert("Found");
} else {
    alert("Not Found");
}




// Chapter-20 for loop nested

// . creat two array : first 
// names ( ["cool", "fast", "big", ]) and last 
// names (["bear", "tiger", "lion"])
// . use nested loop to generate and log all combinations like "cool bear" , 
// "fast tiger" ...

let firstNames = ["cool", "fast", "big"];
let lastNames = ["bear", "tiger", "lion"];

for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        console.log(firstNames[i] + " " + lastNames[j]);
    }
}