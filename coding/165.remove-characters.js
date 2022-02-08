
function removeChars(input){
    let i =0
    let result = 0

    while(i < input.length){
        if(input[i] === 'b') { i++ }
        else if((input[i] === 'a' && input[i+1] === 'c')){
            i += 2 
        }else{
            result += input[i]
            i++
        }
    }

    return result
}

console.log(removeChars('ab')) // 'a'
console.log(removeChars('abc')) // ''
console.log(removeChars('cabbaabcca')) // 'caa'