function foo(){ console.log(1) }
var foo = 2
function foo(){ console.log(3) }
foo()

/**
 Error    => during hoisting function with name name is overrided.
          => so during hoisting foo => function(c.l(1)) => undefined => function(c.l(3)), then during execution foo = 2
          => calling function on string varible result to error foo is not a function
 */