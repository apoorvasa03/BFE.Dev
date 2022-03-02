/**
 SCOPE => scope is certain section in programming where defined variable exists and recognized. 
 beyond that it cant be access
 */

 var a = 1
 function a() {
 }
 
 console.log(typeof a)
 
 var b
 function b() {
 }
 b = 1
 
 console.log(typeof b)
 
 function c() {
 }
 var c = 1;
 
 console.log(typeof c)
 
 var d = 1;
 
 (function(){
   d = '2'
   console.log(typeof d)
   function d() {
   }
 })()
 
 console.log(typeof d)
 
 var e = 1
 const f = function e() {} // f will be undefined and in execution it will be function 
 
 console.log(typeof e)
 
 /**
 "number"   => during hositing a = undefined then function, then during execution a = 1 (global scope)
 "number"   => same as a
 "number"   => during hoisting c will be function then undefined, then during execution c = 1 (global scope)
 "string"   => during hoisting d will be undefined then function, then during execution  d = '2' (local scope/ function scope)
 "number"   => in global scope d is the number. js allows shadowing
 "number"   => f is the const, during hoisting f will be undefined, then during execution f = function e() (script scope)
              where e = 1 in (global scope)
  */