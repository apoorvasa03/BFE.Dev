console.log([] == 0)
console.log([] == false)
console.log(!![])
console.log([1] == 1)
console.log(!![1])
console.log(Boolean([]))
console.log(Boolean(new Boolean([])))
console.log(Boolean(new Boolean(false)))

/**
 true   => [] is converted to number [] => 0, 0 == 0
 true   => converted to number and then to boolean. 0 == false => false == false
 true   => Boolean convertion, anything other than '', 0, false is true, !!true => !false => true
 true   => number convertion. 1 == 1
 true   => boolean convertion
 true   => boolean convertion
 true   => boolean convertion
true    => boolean convertion
 */