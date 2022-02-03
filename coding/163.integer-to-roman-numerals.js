/** time: o(1)  space: o(1) */
/** As there is a finite set of roman numerals, there is a hard upper limit on how many times the loop can iterate.
 *  This upper limit is 15 times, and it occurs for the number 3888, which has a representation of MMMDCCCLXXXVIII.
 *  Therefore, we say the time complexity is constant, i.e. O(1). */
 function integerToRoman(num) {
    let symbol = ['M', 'CM', 'D', 'CD','C', 'XC', 'L', 'XL','X', 'IX', 'V', 'IV','I' ]
    let value = [1000, 900, 500, 400, 100,  90,  50,  40, 10,   9,   5,   4, 1]
    let result = ''
    let i = 0;
    while(num > 0){
        if(num  - value[i] >= 0){
            result += symbol[i]
            num -= value[i]
        }else{
            i++
        }
    }
    return result
}

console.log(integerToRoman(58))