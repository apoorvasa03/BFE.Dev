const obj = {
    msg: 'BFE',
    foo() {
      console.log(this.msg)
    },
    bar() {
      console.log('dev')
    }
  }
  
  obj.foo();
  (obj.foo)();
  (obj.foo || obj.bar)();
  
  
  /**
   "BFE"      => function is called with object reference
   "BFE"      => () is the expresion, which return the reference of the function. hence "BFE"
   undefined  => || operator return the value. reference to the object is lost. hence undefined
   */