/** during == , < , > the values will be converted boolean */
console.log(0 == 1 == 2)
console.log(2 == 1 == 0)
console.log(0 < 1 < 2)
console.log(1 < 2 < 3)
console.log(2 > 1 > 0)
console.log(3 > 2 > 1)

/**
 false == 2  (0 == 2) => false
 false == 0  (0 == 0) => true
 true < 2    ( 1 < 2) => true
 false < 3   ( 0 < 3) => true
 true > 0    ( 1 > 0)  => true
true > 1     ( 1 > 1)=> false
 */