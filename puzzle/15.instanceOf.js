/** 
 * primitive data type is the data which is not object and has no method
 * instanceof OPERATOR checks if the PROTOTYPE PROPERTY of the constructor appears in the PROTOTYPE CHAIN of the object
 * js OPERATOR => +, -, *, /, %, ++, -- typeof, instanceof
 * 
 * */
 console.log(typeof null) 
 console.log(null instanceof Object) 
 console.log(typeof 1)
 console.log(1 instanceof Number)
 console.log(1 instanceof Object)
 console.log(Number(1) instanceof Object)
 console.log(new Number(1) instanceof Object)
 console.log(typeof true)
 console.log(true instanceof Boolean)
 console.log(true instanceof Object)
 console.log(Boolean(true) instanceof Object)
 console.log(new Boolean(true) instanceof Object)
 console.log([] instanceof Array)
 console.log([] instanceof Object)
 console.log((() => {}) instanceof Object)

 /**
  object  => null means nothing. but javascript has bug which give data of null as object
  false   => null (primitive data type) doesnt has constructor in prototype chain of the object
  number
  false   => 1 is primitive type, which doesnt have constructor in prototype chain of object which instance of checks
  false   => same as above
  false   => Number(1) return 1. same as above
  true    => constructor function return object. which has prototype in constructor
  boolean
  false   => true is primitive type which doesnt have prototype chain
  false   => same as above
  false   => Boolean(true) return true which is primitive data type
  true    => constructor function return object with prototype chain
  true    => '[]' is instanceof Array and Object
  true    => function is not primitive type but an object
  */