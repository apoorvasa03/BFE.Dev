/** then()
 1. recieves function as parameter
 2. if parameter is not a function, it's omitted and skipped for this then() block. it will not throw error. 
 3. when skipped, next then() will recieve, recent last return value of previous then()
 */

 Promise.resolve(1)
 .then(() => 2)
 .then(3)
 .then((value) => value * 3)
 .then(Promise.resolve(4))
 .then(console.log)
 
 
 /**
   6
  */
 
 
 /**
  Promise.resolve(1) // return 1
 .then(() => 2) // return 2
 .then(3) // parameter is not func hence it is skipped
 .then((value) => value * 3) recent return value is 2, hence 2* 3 = 6
 .then(Promise.resolve(4)) parameter is not a function, hence skipped. if it is wriiten .then(() => promise.resolve(4)) it would return 4
 .then(console.log) // recent return value is 6
  */