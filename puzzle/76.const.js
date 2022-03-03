/**
1. var, let, const are the KEYWORD that tell the javascript you're declaring the varible
2. if there is not keyword used. then js assign those varible to global scope
 */

function func() {
    const a = b = c = 1
  }
  func()  // when we call the function b and c is set in global scope
  console.log(typeof a, typeof b, typeof c)
  
  /**
   undefined,"number","number"  => In javascript, the assignment happens from right to left. 
                                 So, const statement is only applicable to a, not b and c. 
                                 All the other variables are considered Global without the var/let statement,
                                 hence b and c will be globally scoped
   */