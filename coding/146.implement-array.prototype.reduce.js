/**
 * Reducer is a function which takes 2 paramether => callback and initial value
 * callback function:   can have 4 paramether => accumulator, currentValue, index and array
 * initial value:   1) when initail value is not given, then first item in the array is set as initial value and it assigned to accumulator
 *                  and will skip the first iteration in loop
 *                  2) if the array itself is empty and if initail value is not given, 
 *                  then error will be thrown bcz we cant set 1st item of array(undefined) as initialvalue which will then be assined as accumulator
 */


 Array.prototype.reduce = function(callback, initailValue){
    let argumentsLen = arguments.length
    if(this.length === 0 && argumentsLen === 1){
        throw new Error()
    }

    let accumulator = argumentsLen === 1 ? this[0] : initailValue
    let index = argumentsLen === 1 ? 1 : 0

    for(let i = index; i < this.length; i++){
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}