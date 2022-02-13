function flat(arr, depth = 1){
    let result = []
    for(let element of arr){
        if(Array.isArray(element) && depth > 0){
            result.push(...flat(element, depth -1))
        }else{
            result.push(element)
        }
    }

    return result
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr)) // [1, 2, 3, [4]]

console.log(flat(arr, 1)) // [1, 2, 3, [4]]

console.log(flat(arr, 2)) // [1, 2, 3, 4]