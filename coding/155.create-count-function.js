
/* 
* clouser is a function which has access to variables and scope of outer function
* in other words:  closure is function with persevered data 
**/



const count = (() => {
    let nums = 0;
    const func = () => ++nums
    func.reset = () => nums = 0;
    return func
})()


/** type 2 */
let num = 0
const count1 = () => {
    return ++num
}
count.reset = () => num =0


console.log(count()) //1
console.log(count()) //2
console.log(count.reset()) // 0
console.log(count()) // 1
console.log(count()) // 2
console.log(count()) // 3