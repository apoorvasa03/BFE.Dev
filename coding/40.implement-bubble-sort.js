

/** moving the largest num to the end of of the array, in next iteration compare until the last moved num
 * i < array.length - 1, -1 is bcz we compare last 2nd num to last num ie array[j] = array[j+1],
 * so comparing last num is not needed, bcz in previous iteration itself it is compared
 */

/**time: o(n^2) space: o(n) */

function bubbleSort(array){
    for(let i = 0; i < array.length - 1; i++){
        for(let j =0; j < array.length - 1 - i; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }

    return array
}