/** functions inside the conditional block is hoisted with undefined value and not function itself */
if (true) {
    function foo() {
      console.log('BFE')
    }
  }
  if (false) {
    function bar() {
      console.log('dev')
    }
  }
  
  foo()
  bar()
  
  /**
   "BFE"  => foo and bar is hosited with undefined and since only true condition executes foo is assinged to func and bar is still undefined
   Error  => since bar is undefined, error is thrown. foo is not a function
   */