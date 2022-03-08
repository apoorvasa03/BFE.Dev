/** sign function returns -/+ 1, indicating the sign of the number passed as the parameter. if argument is 0, then it return +/- 0 */
console.log(1 / 0)
console.log(-1 / 0)
console.log(0 / 0)
console.log(0 === -0)
console.log(Object.is(0, -0))
console.log(Object.is(0, Math.round(-0.5)))
console.log(Object.is(0, Math.round(0.5)))
console.log(0 * Infinity)
console.log(Infinity / Infinity)
console.log(Object.is(0, Math.sign(0)))
console.log(Object.is(0, Math.sign(-0)))
console.log(1 / -0)
console.log(1 / 0)
console.log(1n / 2n)

/**
Infinity
-Infinity
NaN
 true
 false
 false  => object.is(0, -0)
 false  => object.is(0, 1)
 NaN
 NaN
 true   => object.is(0, 0)
 false   => object.is(0, -0)
 -Infinity
 Infinity
 Error
 */