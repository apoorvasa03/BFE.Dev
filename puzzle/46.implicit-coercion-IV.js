const foo = [0]
if (foo) {
  console.log(foo == true) // when using '==' both sides convert to numbers  0 == 1 => false
} else {
  console.log(foo == false)
}

/** false */



Number([]) // 0
Number([0]) // 0
Number([2]) // 2
Number([2, 4, 5]) // NaN
Number({}) // NaN