// VERY EASY: Create two variables and assign a number to each. 
// Console log the difference between the numbers. 
// Example output: “The difference between 6 and 2 is 4”
var num1 = 5;
var num2 = 8;
console.log(`The difference between ${num1} and ${num2} is ${num2-num1}.`)
// EASY: Create two variables and assign a person’s name to each. 
// Console log a statement that says which name is shorter or longer, and by how many characters. 
// Example output: “The name Thomas is longer than John by 2 characters”
var name1 = "Joseph";
var name2 = "Fredrick";
if(name1.length > name2.length){
    console.log(`The name ${name1} is longer than ${name2} by ${name1.length - name2.length}.`);
}else{
    console.log(`The name ${name2} is longer than ${name1} by ${name2.length - name1.length}.`);
}
// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering 
// (typing in all lowercase), or neither. 
// Use prompt to get user input, and then console log whether the user was shouting, whispering, 
// or talking normally.

// HARD: Create 4 math functions, one called add() that adds 2 numbers, one c
// alled subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, 
// and one called divide() to divide two numbers.

// VERY HARD: Create a simple calculator that prompts the user for a number, 
// an operator (either +, -, * or /), and another number, and then uses the functions created 
// in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"