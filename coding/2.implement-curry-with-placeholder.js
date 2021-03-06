function curry(func){
    return function curried(...args){
        //slice is needed for 4th example where more than 3 parameter is passed
        if(!args.slice(0, func.length).includes(curry.placeholder) && args.length >= func.length) return func(...args)
        return (...newArgs) => {
            let res = args.map(arg => arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg)
            return curried(...res, ...newArgs)
        } 
    }
}


const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }


 
 const curriedJoin = curry(join)
 curry.placeholder = Symbol()
 let _ = curry.placeholder
 
 console.log(curriedJoin(1, 2, 3)) // '1_2_3'
 
 console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'
 
 console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'

console.log(curriedJoin(_,_,_,_)(_,2,_)(_,3)(1)) // '1_2_3'