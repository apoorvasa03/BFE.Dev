(async () => {
  await Promise.all([]).then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error)
  })
  
  await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)]).then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error)
  })
  
  await Promise.all([1,2,Promise.resolve(3), Promise.reject('error')]).then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error)
 
  })
})()

/**
 []
 [1, 2, 3, 4]
 "error"      => when one of the promise is rejected, all promised is rejected, 
                  and catch blocked will be executed, with first promise error
 */