/**
 1. in number convertion:  null -> 0 and undefined -> NaN
 2. remember during == null and undefined is not converted to numbers
 */
 console.log(0 == false)
 console.log('' == false)
 console.log([] == false)
 console.log(undefined == false)
 console.log(null == false)
 console.log('1' == true)
 console.log(1n == true)
 console.log(' 1     ' == true)
 
 /**
  true
  true
  true
  false -> number convertion will npot happen during == undefined
  false -> number convertion will npot happen during == null
   true
   true -> javascript will try to convert 1n to number, so it is converted 1 and ignores and n. hence true
   true
  */