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

function curry(func) {
    return function curryInner(...args) {
      if (args.length >= func.length) return func(...args);
      return (...args2) => curryInner(...args, ...args2);
    };
  }

function sum(a, b, c) {
    return a + b + c;
}

let curried = curryWithoutArrowFun(sum)
let curried1 = curried(1)
let curried2 = curried1(2)
let curried3 = curried2(4)
console.log(curried3)