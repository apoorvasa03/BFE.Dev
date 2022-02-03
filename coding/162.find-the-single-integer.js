/** time: O(n)  space O(1) */
function findSingle(arr){
    let set = new Set();
    for(let num of arr){
        if(set.has(num)){
            set.delete(num)
        }else{
            set.add(num)
        }
    }
    return [...set][0]
}

console.log(findSingle([10, 2, 2 , 1, 0, 0, 10])) //1

//TODO  people have used reduce with bit operator. read it