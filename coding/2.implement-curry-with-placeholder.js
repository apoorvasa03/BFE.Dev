function curry(func){
    return function curried(...args){
        if(!args.includes(curry.placeholder) && args.length >= func.length) return func(...args)
        else{
            return function(newArgs){
                let res = args.map(arg => arg === curry.placeholder && newArgs.length ? newArgs.shift(): arg)
                return curried(...res, ...newArgs)
            }
        }
    }
}

let join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

let curriedJoin = curry(join)



function curry (func){
    return function curried(...args){
        if(args.length >= func.length) return func(...args)
        else (...newArgs) => {
            return new curried(...args,...newArgs)
        }
    }
}