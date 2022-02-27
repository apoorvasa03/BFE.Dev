
/** javascript is the single threaded langauge. it has only one call stack that is used to execute the program.
 * all synch code is push to stack and poped out of stack
 * the asynch call(setTimeout, async) will be handled by webapi. then then push callback to event loop
 * when all the code in call stack is executed, event loop callback will be picked
*/

console.log(1) // push to stack [1st item in call stack]
const promise = new Promise((resolve) => {
  console.log(2) // push to stack [2nd item in call stack]
  resolve()
  console.log(3) // push to stack [3rd item in call stack]
})

console.log(4) // push to stack [4th item in call stack]

promise.then(() => {
  console.log(5) // push to callback loop (event loop) [1st item in event loop queue]
}).then(() => {
  console.log(6) // push to callback loop (event loop) [2nd item in event loop queue]
})

console.log(7) // push to stack [5th item in call stack]

setTimeout(() => {
  console.log(8) // push to webapi which then pushed to callback loop (event loop) after time
}, 10) // [waites in webapi for 10min and then pushed to event loop] [4th item in event loop queue]

setTimeout(() => {
  console.log(9) // push to webapi which then pushed to callback loop (event loop) after time
}, 0) // [3rd item in event loop queue]


/**
 1
 2
 3
 4
 7
 5
 6
 9
 8
 */