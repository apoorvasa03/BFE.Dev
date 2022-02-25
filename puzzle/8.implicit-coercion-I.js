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