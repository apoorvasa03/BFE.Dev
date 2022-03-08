/** 
 * == type convertion and special handling for Nan , +0, -0 (so NaN != NaN, and -0 == +0)
 * === without type convertion and special and special handling for Nan , +0, -0 (so NaN != NaN, and -0 == +0)
 * object.is sanme as === but without spcial handling
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness */

 console.log(0 == '0')
 console.log(0 === '0')
 console.log(Object.is(0, '0'))
 
 console.log(0 == 0)
 console.log(0 === 0)
 console.log(Object.is(0, 0))
 
 console.log(0 == -0)
 console.log(0 === -0)
 console.log(Object.is(0, -0))
 
 console.log(NaN == NaN)
 console.log(NaN === NaN)
 console.log(Object.is(NaN, NaN))
 
 console.log(0 == false)
 console.log(0 === false)
 console.log(Object.is(0, false))
 
 /**
  true
  false
  false
 
  true
  true
  true
 
  true
  true
  false
 
  true
  true
 false
 
 false
 false
 true
 
 true
 false
 false
  */