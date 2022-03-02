/** technically var, let, const are hosited, var is declared and initialized during hoisting.
 * let and const are declared but not initialized during hoisting
 */

 let foo = 10
 function func1() {
     console.log(foo)
     var foo = 1
 }
 func1 ()
 
 
 function func2() {
     console.log(foo)
     let foo = 1
 }
 func2 ()
 
 /**
  undefined
  "Error"
  */
 
 