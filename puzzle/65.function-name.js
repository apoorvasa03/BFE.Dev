var foo = function bar(){ 
    return 'BFE'; 
  };
  
  console.log(foo());
  console.log(bar());
  
  
  /**
   "BFE"  => here foo is varibale and function is assinged to it
   Error  => bar is the expression, so during hoisted it is not declared. 
              calling the function which is not declared throws error
   */