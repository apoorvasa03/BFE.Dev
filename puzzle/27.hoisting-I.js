/** 
1.Hoisting is the process of move the declaration of functions, variables or classes to the top of scope, prior to execution of the code.
2. technically, var , let and const are hoisted. var is declared and initialized(undefined) during hoisting. 
let and const are only declared during hoisting, not initialized. Accessing uninitialized variables result in ReferenceError 
*/


const a = 1
console.log(a)

var b
console.log(b)
b = 2

console.log(c)
var c = 3

console.log(d)
let d = 2

/**
 1
 undefined
 undefined
 Error
 */

 /**
const a = 1
console.log(a) // a is defined and intailzed as 1, so 1

var b
console.log(b) // var variables declaration is hoisted with undefined
b = 2

console.log(c) // var variables declaration is hoisted with undefined
var c = 3
 
console.log(d) // Error, let variables declaration is hoisted but no default value is assigned, hence reference error
let d = 2
  */