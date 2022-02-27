/** in promise function once the function is resolved will be not again resolve/reject.
 but code after resolve is still reachable. meaning if we write console after resolve, console will be printed
 but in normal function once the function is writtened, the code written after it is unreachable 
  */

 new Promise((resolve, reject) => {
    resolve(1)
    resolve(2)
    reject('error')
  }).then((value) => {
    console.log(value)
  }, (error) => {
    console.log('error')
  })
  
  /**
   1
   */