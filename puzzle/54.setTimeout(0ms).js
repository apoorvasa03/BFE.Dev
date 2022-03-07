/** setTimeOut => during settimeout the callback function is passed to queue when after given delay time.
 */
 setTimeout(() => {
    console.log(2)
  }, 2)
  
  setTimeout(() => {
    console.log(1)
  }, 1)
  
  setTimeout(() => {
    console.log(0)
  }, 0)
  
  
  /**
   2 // here even thought 3rd settimeout delay is 0ms, its still wait for a ms. so 1, 0, and 2 enter the queue after delay and prints the output 
   1
   0
   */