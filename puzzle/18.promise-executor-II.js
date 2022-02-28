const p1 = Promise.resolve(1) // return promise object with 1
console.log(p1)
const p2 = new Promise((resolve) => resolve(p1)) // return pending promise
const p3 = Promise.resolve(p1) // return promise object with 1
const p4 = p2.then(() => new Promise((resolve) => resolve(p3))) // return pending promise, then() returns a new promise
const p5 = p4.then(() => p4) // return pending promise, then() returns a new promise. then(() => 53) gives promise{53}

console.log(p1 == p2)
console.log(p1 == p3)
console.log(p3 == p4)
console.log(p4 == p5)

/**
 false
 true      // bcz p3 is the promise with returns p1, hende p1 and p3 obj reference is same
 false     // p4 return pending promise with p3, p3 object and pending promise is not same
 false     // TODO-QUESTION?
 */