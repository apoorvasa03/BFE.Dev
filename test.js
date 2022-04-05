
console.log(1+true)
console.log(true+true)
console.log('1'+true)
console.log( '2'> '3')
console.log( 'two'> 'three')



/**
 * 2      => when + is used where nop string is presnent, it try to convert true to 1 and add it
 * 2      => since string is not presnt, true is converted to number
 * 1true  => since string is present, concatenation is done
 * false  => 2 and 3 is converted to number and result is shown
 * true   => "tw" charcode is greater than "th" charcode then true
 */