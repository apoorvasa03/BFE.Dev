console.log(1)

document.body.addEventListener('click', () => {
  console.log(2)
})

Promise.resolve().then(() => {
  console.log(3)
})

setTimeout(() => {
  console.log(4)
}, 0)

console.log(5)

document.body.click() 

console.log(6)

/**
1   => call stack
5   => call stack
2   => click method does synchronously run the activation steps which includes immediately firing (creating and dispatching) the event. It is not put in the event loop queue
6   => call stack
3   => micro task (call back)
4   => macro task(call back)
 */