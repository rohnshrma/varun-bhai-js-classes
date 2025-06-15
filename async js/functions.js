// function declaration

// function funcName(parameters){
    // code to be executed
// }



// function addition(a,b){
//     return a+b
// }


// console.log(addition(12,34))

// var res = addition(45,56)
// console.log(res)




// function expression : anonymous function and arrow function

// 1. use them by assigning them to a variable

// var multiplication = function (a,b){
// return a*b
// }

// var res = multiplication(23,2)
// console.log(res)

// 2. use them as a callback function


// when a function is passed into another function as a parameter ,
// the passed function becomes a callback function


// var calcAge = function (){
//     var yob = parseInt(prompt("Enter your year of birth"))
//     var cy = new Date().getFullYear()
//     return cy - yob
// }

// var calcAge = function (){
//  return    new Date().getFullYear() - parseInt(prompt("Enter your year of birth"))
// }


// var age = calcAge()
// console.log(age)


// var lifeSpan = function(ageFn , averageAge){
//     var yearsLeft = averageAge - ageFn()
//     console.log(`Years Left : ${yearsLeft}\nMonths Left : ${yearsLeft * 12}\nWeeks Left : ${yearsLeft * 52}\nDays Left : ${yearsLeft*365}`)
// }

// lifeSpan(function (){
//  return    new Date().getFullYear() - parseInt(prompt("Enter your year of birth"))
// } , 100)
// lifeSpan( ()=>{
//  return    new Date().getFullYear() - parseInt(prompt("Enter your year of birth"))
// } , 100)



// arrow function : 


// syntax

// (parameters)=>{
// code to be executed
// }


// in case exact 1 parameter, the round brackets can be ommited


// var upper_name = name =>{
//     return name.toUpperCase()

// }


// if all your function does is return something then  the "return" keyword as well as the "{}" brackets can be ommited

// var sqFn = num => num**2


