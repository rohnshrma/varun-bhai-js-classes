// Single if statement: Checks a condition and executes code if true
// var age = parseInt(prompt("Enter your age :")); // Prompts user for age, converts input (string) to an integer using parseInt
// if (age >= 18) { // Checks if the value of 'age' is greater than or equal to 18
//     console.log(age, "Eligible to drive"); // If condition is true, logs the age and eligibility message
// }
// The code inside the if block runs only if the condition (age >= 18) evaluates to true

// General syntax of an if statement
// if (condition) { // The condition is evaluated; must result in a boolean (true or false)
//     code to be executed // Runs only if the condition is true
// }

// If-else statement: Provides an alternative block of code if the condition is false
// var age = parseInt(prompt("Enter your age :")); // Prompts user for age, converts input (string) to an integer using parseInt
// if (age >= 18) { // Checks if the value of 'age' is greater than or equal to 18
//     console.log(age, "Eligible to drive"); // If condition is true, logs the age and eligibility message
// } else { // If the condition above (age >= 18) is false, the else block executes
//     console.log(age, "Not Eligible to drive"); // Logs the age and non-eligibility message
// }
// The code inside the else block runs if all conditions above are false

// If-else-if-else statement: Checks multiple conditions to determine if a number is positive, negative, or zero
var num = parseInt(prompt("Enter a number : ")); // Prompts user for a number, converts input (string) to an integer using parseInt
if (num > 0) { // Checks if 'num' is greater than 0
    console.log(`${num} is positive`); // If true, logs that the number is positive using template literal
} else if (num < 0) { // If the above condition is false, checks if 'num' is less than 0
    console.log(`${num} is negative`); // If true, logs that the number is negative using template literal
} else { // If all conditions above are false (i.e., num is neither > 0 nor < 0), this block runs
    console.log(`${num} is zero`); // Logs that the number is zero using template literal
}