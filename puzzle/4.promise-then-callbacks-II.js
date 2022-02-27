/**
 Finally()
 1. The finally() method can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.
 2. A finally callback will not receive any argument, since there's no reliable means of determining if the promise was fulfilled or rejected
 3. then() after finally will not recieve returned finally() value. instaed it get the values from latest then()/catch() return value
 */
 Promise.resolve(1)
 .then((val) => {
   console.log(val)
   return val + 1
 }).then((val) => {
   console.log(val)
 }).then((val) => {
   console.log(val)
   return Promise.resolve(3)
     .then((val) => {
       console.log(val)
     })
 }).then((val) => {
   console.log(val)
   return Promise.reject(4)
 }).catch((val) => {
   console.log(val)
 }).finally((val) => {
   console.log(val)
   return 10
 }).then((val) => {
   console.log(val)
 })
 
 
 /**
  1
  2
  undefined
  3
  undefined
  4
  undefined
  undefined
  */
 
 
  /**
 Promise.resolve(1) // return 1
 .then((val) => {
   console.log(val)
   return val + 1 // print 1 and return 2
 }).then((val) => {
   console.log(val) // print 2 and return undefined
 }).then((val) => {
   console.log(val) // print undefined
   return Promise.resolve(3)
     .then((val) => {
       console.log(val) // print 3 and return undefined 
     }) 
 }).then((val) => {
   console.log(val)
   return Promise.reject(4) // print undefined and return reject 4
 }).catch((val) => {
   console.log(val) // print 4 and return undefined (*****)
 }).finally((val) => { // finally will not recieve any parameter bcz we dont know whether a promise is resolved/ rejected before finally()
   console.log(val)
   return 10 // prints undefined and return 10
 }).then((val) => {
   console.log(val) // then() will recieve the value from latest return then()/catch() function. which is undefined (*****)
 })
   */