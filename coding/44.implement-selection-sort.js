/** find the smallest num and move it to front of the array and 
 * since the smallest is in the front of the array we will not consider it in next iteration */
function selectionSort(arr){
    for(let i =0; i < arr.length; i++){
        let minIndex = i
        for(let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[minIndex]) minIndex = j
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    return arr
}

console.log(selectionSort([4,6,2,5,1,3]))