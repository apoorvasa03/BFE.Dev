console.log(1) 

setTimeout(() => {
  console.log(2)
}, 10)

setTimeout(() => {
  console.log(3)
}, 0);

new Promise((_, reject) => {
  console.log(4)
  reject(5)
  console.log(6)
}).then(() => console.log(7))
.catch(() => console.log(8))
.then(() => console.log(9))
.catch(() => console.log(10))
.then(() => console.log(11))
.then(console.log)
.finally(() => console.log(12))

console.log(13) 

/**
 1
 4
 6
 13
 8
 9
 11
 undefined
 12
 3
 2
 */


 /**------------------ */

console.log(1)  // callstack, print 1

setTimeout(() => { // callback queue 
  console.log(2)
}, 10)

setTimeout(() => { // callback queue 
  console.log(3)
}, 0);

new Promise((_, reject) => {
  console.log(4) // call stack, print 4
  reject(5)      // rejects the promise, go to catch block
  console.log(6) // call stack, print 6
}).then(() => console.log(7)) // skip
.catch(() => console.log(8)) // microtask queue. print 8
.then(() => console.log(9)) //microtask queue, print 9
.catch(() => console.log(10)) // skip
.then(() => console.log(11)) // microtask queue, print 11
.then(console.log) // microtask queue, print unfined
.finally(() => console.log(12)) // microtask queue. print 12

console.log(13) // call stack, print 13
