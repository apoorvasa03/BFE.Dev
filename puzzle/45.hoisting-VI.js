
var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  console.log(foo);
  console.log(window.foo)
})()

/**
 undefined  => IIFE has its own scope, where foo is hoisted with undefined value
 1          => window is global, hence foo in window is 1 
 2          => foo is updated to 2 in local/function scope
 3          => foo is updated to 2 in local/function scope
 1          => IIFE has its own scope, where foo is hoisted with undefined value
 */