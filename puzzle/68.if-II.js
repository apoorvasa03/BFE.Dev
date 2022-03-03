
if (function foo(){ console.log('BFE') }) {
    console.log('dev')
  }
  foo()
  
  /**
   "dev"  => if convert statement to Boolean, Boolean of function is true. 
   Error  => in if condition foo() was function expression not function declaration. so foo is not hoisted. 
          => foo is not defined
  */        