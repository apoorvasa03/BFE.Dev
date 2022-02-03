/**time: o(n^2)  space: o(1) */
function getIntersection1(arr1, arr2) {
    let a = new Set(arr1);
    let b = new Set(arr2);
    return [...a].filter(item => b.has(item))
}

/**time: o(n)  space: o(1) */
function getIntersection(arr1, arr2) {
    let set = new Set();
    let map = {}
    for(let i of arr1) map[i] = true
    for(let i of arr2) if(map.hasOwnProperty(i)) set.add(i)
    return [...set]
}

console.log(getIntersection([5, 2, 7, 1, 2], [12, 45, 7, 2]))
  