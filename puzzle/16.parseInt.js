/**Map
 * map resturns the new array
 * so map should be used when we return the value to form the new array, else we can use foreach and for loop
 * map parameters are (element, index, array)
 */
 console.log(['0'].map(parseInt))
 console.log(['0','1'].map(parseInt))
 console.log(['0','1','1'].map(parseInt))
 console.log(['0','1','1','1'].map(parseInt))
 
 /** parseInt take 2 parameter, (element, radix) where radix is base in number system.
 * when map sent call parameter to parseInt, (element, index) = (element, radix)
 
  0            => for 0 and more than 2, base is ny default 10
  0, NaN       => 1(radix) is not in number system, hence NaN
  0, NaN, 1    => 2(radix) is binary, so '1' is converted to binary 1 
  0, NaN, 1, 1
  */

  /** NOTE: this problem can be solve by  console.log(['0'].map((item) => parseInt(item))) */