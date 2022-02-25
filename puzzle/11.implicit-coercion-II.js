/** The + operator only exists for numbers and strings. 
 * When you use it on another type, JavaScript tries to convert the type (first to string, then int) 
 * ToPrimitive([[]]) = ""
 * ToPrimitive({}) = "[object Object]"
 * */
 console.log([] + [])
 console.log([] + 1)
 console.log([[]] + 1)
 console.log([[1]] + 1)
 console.log([[[[2]]]] + 1)
 console.log([] - 1)
 console.log([[]] - 1)
 console.log([[1]] - 1)
 console.log([[[[2]]]] - 1)
 console.log([] + {})
 console.log({} + {})
 console.log({} - {})
 /**
 ""
"1"
"1"
"11"
"21"
-1
-1
0
1
"[object Object]"
"[object Object][object Object]"
NaN
  */
 
  console.log([1, 2] + [3, 4]) 
  console.log([{1:2}, {2: 3}] + [3, 4])
  
  
  /**
 '1,23,4'
 '[object Object],[object Object]3,4'
 */ 