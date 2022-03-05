/**
 The JavaScript in operator is used to check if a specified property exists in an object or in its inherited properties 
 (in other words, its prototype chain). The in operator returns true if the specified property exists.
 */

 const obj = {
	foo: 'bar'
}
  
  console.log('foo' in obj)
  console.log(['foo'] in obj)

  /**
   true
   true		=> here ['foo'] is converted to string

   Note:	String([]) => ''
			String([1, 2, 3, 45]) => '1,2,3,45'
			String({})	=> '[object Object]'
			String({})

   */