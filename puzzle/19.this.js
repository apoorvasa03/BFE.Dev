/**
 IIFE : 
 1. immediately invoked function expression is a function defined as an expression and executed immediately after creation.
 2. it has its own scope and restrics the varibles and functions to become global
 2.	IIFE solves two problem :
 	* when we defined variables and function, js engine adds it to global object. (this happens before ES6 since all the varibale was global)
 		js will release the memory allocated to them only when its global object loses its scope. 
		so IIFE Helps avoid creating unnecessary global variables and functions.
	* having many variable and functions in global object many likley cause the name collision.

Arrow Function: Arrow function lexically bind 'this' scope. we cant re-bind 'this' to arrow function. 
1. Arrow functions are lexically scoped where as regular anonymous functions are dynamically scoped
 */

const obj2 = {
	a: 10
}
const obj = {
	a: 1,
	b: function() {
	  console.log(this.a)
	},
	c() {
	  console.log(this.a)
	},
	d: () => {
	  console.log(this.a)
	},
	e: (function() {
	  return () => {
		console.log(this.a);
	  }
	})(),
	f: function() {
	  return () => {
		console.log(this.a);
	  }
	}
  }
  
  console.log(obj.a)
  obj.b()
  ;(obj.b)()
  const b = obj.b
  b()
  obj.b.apply({a: 2})
  obj.c()
  obj.d()
  ;(obj.d)()
  obj.d.apply({a:2})
  obj.e()
  ;(obj.e)()
  obj.e.call({a:2})
  obj.f()()
  ;(obj.f())()
  obj.f().call({a:2})


  /**
   1			=> straight forward, call property in obj, hence 1
   1			=> function b is called from obj, hence 1
   1			=> () is the expression, it doesnt change the way we call the function. same as above
   undefined	=> obj.b return the function and reference to the obj is lost, hence undefined
   2			=> here function b is binded with {a: 2}, hence 2
   1			=> c function is called with obj, hence 1
   undefined	=> here d is arrow function, which is lexically scoped. hence undefined
   undefined	=> () is the expression, it doesnt change the way we call the function. same as above
   undefined	=> d is arrow function which is lexically scoped, we cant re-bind 'this' reference to arrow function
   undefined	=> e is the IIFE, which has its own scope. and a is not present in it. hence undefined
   undefined	=> () is the expression, it doesnt change the way we call the function. same as above
   undefined	=> e is IIFE, obj.e is invoked and have return arrow function, which cant be re-bined
   1			=> f is a normal function which returns the arrow function which forms the closure and remembers the outer function scope. hence 1.
   1			=> same as above
   1			=> same as above. note: arrow function cant be re-bind. its lexically scoped

   */