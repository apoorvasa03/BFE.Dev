/** Comma operator : (,) evaluates each of its operands (from left to right) and returns the value of the last operand */
var obj = {
    a: "BFE",
    b: "dev",
    func: (function foo(){ return this.a; }, function bar(){ return this.b; })
  }
  
  console.log(obj.func())
  
  
  /**
   "dev" => common operator evaluates from left to right and returns the last(right most) operand, so func is assined with bar()
   */
  
  
  
  
  
  /** 
  var a, b, c;
  
  a = b = 3, c = 4; // Returns 4 in console
  console.log(a); // 3 (left-most)
  
  var x, y, z;
  
  x = (y = 5, z = 6); // Returns 6 in console
  console.log(x); // 6 (right-most)
  
  */