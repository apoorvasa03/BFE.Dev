function foo() {
	console.log(i)
	for (var i = 0; i < 3; i++) {
	  console.log(i)
	}
  }
  
  foo()

  /**
   undefined    => due to hositing, var is declared at the top of the scope
   0            => i is avaible inside the for loop
   1
   2
   */