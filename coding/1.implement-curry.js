/** currying:
 * currying is a process with which we can transform function with multiple parameter into sequence of nested function.
 * it returns the few funtions which expects next argument
 * 
 * Advantage of currying: the main benifit of currying is when you use the same call with some of the same parameters a lot.
 * ie. it helps us avoid passing same parameter again and again
 * 
 * best source: https://medium.com/dailyjs/why-the-fudge-should-i-use-currying-84e4000c8743
 */

function curryWithoutArrowFun (func){
    return function curried(...args){
        if(args.length >= func.length){
            return func(...args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

function curry1(func) {
    return function curryInner(...args) {
      if (args.length >= func.length) return func(...args);
      return (...args2) => curryInner(...args, ...args2);
    };
  }


function curry (func){
    return function curried(...args){
        if(args.length >= func.length) return func(...args)
        else return (...newArgs) => {
            return curried(...args,...newArgs)
        }
    }
}

function sum(a, b, c) {
    return a + b + c;
}

// let curried = curryWithoutArrowFun(sum)
// let curried1 = curried(1)
// let curried2 = curried1(2)
// let curried3 = curried2(4)
//--------------

const curriedJoin = curry(sum)

console.log(curriedJoin(1, 2, 3)) // 6

console.log(curriedJoin(1)(2, 3)) // 6

console.log(curriedJoin(1, 2)(3)) // 6