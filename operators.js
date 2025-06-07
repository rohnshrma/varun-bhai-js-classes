// arithmetic operators
var a = 10;  // Declare variable 'a' and assign it the value 10
var b = 3;   // Declare variable 'b' and assign it the value 3

console.log(a + b);  // Sum: Adds 'a' and 'b', outputs 13
console.log(a - b);  // Difference: Subtracts 'b' from 'a', outputs 7
console.log(a * b);  // Product: Multiplies 'a' by 'b', outputs 30
console.log(a / b);  // Quotient: Divides 'a' by 'b', outputs approximately 3.3333
console.log(a % b);  // Remainder: Divides 'a' by 'b' and returns the remainder, outputs 1
console.log(a ** b); // Exponential: Raises 'a' to the power of 'b', outputs 1000 (10^3)

// comparison operators
console.log(a > b);   // Greater than: Checks if 'a' is greater than 'b', outputs true
console.log(a < b);   // Less than: Checks if 'a' is less than 'b', outputs false
console.log(a >= b);  // Greater than or equal to: Checks if 'a' is greater than or equal to 'b', outputs true
console.log(a <= b);  // Less than or equal to: Checks if 'a' is less than or equal to 'b', outputs false
console.log(a == b);  // Equal to: Checks if 'a' equals 'b' in value (not type), outputs false
console.log(a === b); // Strict equal to: Checks if 'a' equals 'b' in both value and type, outputs false
console.log(a != b);  // Not equal to: Checks if 'a' is not equal to 'b' in value, outputs true
console.log(a !== b); // Strict not equal to: Checks if 'a' is not equal to 'b' in value or type, outputs true


// assignment operators
console.log(a += 10);  // Add and assign: Adds 10 to 'a' and assigns the result to 'a', outputs 20
console.log(a -= 10);  // Subtract and assign: Subtracts 10 from 'a' and assigns the result to 'a', outputs 10
console.log(a *= 10);  // Multiply and assign: Multiplies 'a' by 10 and assigns the result to 'a', outputs 100
console.log(a /= 10);  // Divide and assign: Divides 'a' by 10 and assigns the quotient to 'a', outputs 10
console.log(a %= 10);  // Modulus and assign: Divides 'a' by 10 and assigns the remainder to 'a', outputs 0
console.log(a **= 10); // Exponential and assign: Raises 'a' to the power of 10 and assigns the result to 'a', outputs 10^10 = 10000000000

// logical operators
var a = 10;  // Re-declare variable 'a' and assign it the value 10
var b = 3;   // Re-declare variable 'b' and assign it the value 3

// AND operator (&&): Returns true if both conditions are true
console.log(a > b && b < a); // Checks if 'a' is greater than 'b' AND 'b' is less than 'a', true && true outputs true
console.log(a < b && b < a); // Checks if 'a' is less than 'b' AND 'b' is less than 'a', false && true outputs false
console.log(a < b && b > a); // Checks if 'a' is less than 'b' AND 'b' is greater than 'a', false && false outputs false

// OR operator (||): Returns true if at least one condition is true
console.log(a > b || b < a); // Checks if 'a' is greater than 'b' OR 'b' is less than 'a', true || true outputs true
console.log(a < b || b < a); // Checks if 'a' is less than 'b' OR 'b' is less than 'a', false || true outputs true
console.log(a < b || b > a); // Checks if 'a' is less than 'b' OR 'b' is greater than 'a', false || false outputs false

// NOT operator (!): Inverts the boolean value
console.log(!true);  // NOT true: Inverts true to false, outputs false
console.log(!false); // NOT false: Inverts false to true, outputs true