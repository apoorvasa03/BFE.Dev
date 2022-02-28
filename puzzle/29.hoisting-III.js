var a = 1

function func() {
  a = 2
  console.log(a)  
  var a    
}

func()

console.log(a) 

if (!('b' in window)) { 
  var b = 1 
}
 
console.log(b)  

/**
 2
 1
 undefined
 */


/*** ----------- */

var a = 1

function func() {
  a = 2
  console.log(a)  // block scope of a which is shadowing the outer 'a' var is 2 and in function scope a is hoisted and console log is 2
  var a           // if this line was not present, then outer var 'a' which is in global scope value would be changed to 2
}

func()

console.log(a) // global scope value of a is 1

if (!('b' in window)) { // during execution b will not be in window 
  var b = 1  // b is hoisted with value undefined
}
 
console.log(b)  // undefined
