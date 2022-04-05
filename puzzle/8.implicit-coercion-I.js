console.log(Boolean('false'))
console.log(Boolean(''))
console.log(Boolean(false))
console.log(Boolean(0))
console.log('3' + 1)
console.log('3' - 1)
console.log('3' - ' 02 ')
console.log('3' * ' 02 ')
console.log(Number('1'))
console.log(Number('number'))
console.log(Number(null))
console.log(Number(false))
console.log(Number(undefined))

const enabled = new Boolean(false) // Because a new Boolean is an object with some data inside, aka a truthy value.
if (enabled) {
  console.log('Show this feature')
}
/**
 true
 false
 false
 false
 31
 2
 1
 6
 1
 NaN
 0
 0
 NaN
 'Show this feature'
 */


 /**** extra */

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