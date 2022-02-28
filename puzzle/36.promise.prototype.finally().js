Promise.resolve(1)
.finally((data) => {
  console.log(data)   // finally will not recieve any data
  return Promise.reject('error')  // return error
})
.catch((error) => {
  console.log(error)  // print error
  throw 'error2'   // throw an error
})
.finally((data) => {
  console.log(data)   // finally will not recieve any data
  return Promise.resolve(2).then(console.log) // print 2
})
.then(console.log) // ignore bcz last action in promise was catch which throw error2
.catch(console.log) // print error2

/**
undefined
"error"
undefined
2
"error2"
 */