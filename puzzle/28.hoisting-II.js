/** 
1.Hoisting is the process of move the declaration of functions, variables or classes to the top of scope, prior to execution of the code.
2. technically, var , let and const are hoisted. var is declared and initialized(undefined) during hoisting. 
let and const are only declared during hoisting, not initialized. Accessing uninitialized variables result in ReferenceError 
*/

const func1 = () => console.log(1)

func1()
func2()

function func2() {
  console.log(2)
}

func3()

var func3 = function func4() {
  console.log(3)
}

/**
 1
 2
 Error
 */

 /**
const func1 = () => console.log(1)

func1() // func1 is a function which is hoisted, so 1
func2() // func2 is also a function which is hoisted, so 2

function func2() {
  console.log(2)
}

func3() // Error, func3 is the function which is assinged to variable, hence func3 variable is hoisted and assign undefied, hence error => func3 is not a function

var func3 = function func4() {
  console.log(3)
}
  */