/**time -O(n) space O(1) */
function compare(str1, str2){
    let firstArr = str1.split('.').map(Number);
    let secArray = str2.split('.').map(Number);
 
    for(let i =0; i< firstArr.length; i++){
        if(firstArr[i] === secArray[i]) continue
        if(firstArr[i] < secArray[i]) return -1; 
        else return 1
    }
 
    return 0;
 }
 
 console.log(compare('12.1.0', '12.0.9')) // 1
 console.log(compare('12.1.0', '12.1.2')) // -1
 console.log(compare('5.0.1', '5.0.1')) // 0
 console.log(compare('0.1.100', '0.1.99')) // 1
 console.log(compare('15.4.3', '5.4.4')) // 1
 console.log(compare('56.4.3', '6.4.3') ) // 1
 
 /**
 When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
  An empty string converts to 0. A non-numeric string converts to NaN which is always false . 
  When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
  */