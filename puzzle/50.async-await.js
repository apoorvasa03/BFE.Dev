async function async1(){
    console.log(1)      // call stach 2
    await async2()
    console.log(2)      // micro task 1
  }
  
  async function async2(){
    console.log(3)      // call stack 3
  }
  
  console.log(4)            // => call stack 1
  
  setTimeout(function(){    // macro 1
    console.log(5)
  }, 0)
  
  async1()
  
  new Promise(function(resolve){
    console.log(6)      // call stack 4
    resolve()
  }).then(function(){
    console.log(7)      // micro task 2
  })
  
  console.log(8)        // call stack 5

  /**
   4
   1
   3
   6
   8
   2
   7
   5
   */