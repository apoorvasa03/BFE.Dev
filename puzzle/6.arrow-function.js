const obj = {
    dev: 'bfe',
    a: function() {
      return this.dev
    },
    b() {
      return this.dev
    },
    c: () => {
      return this.dev
    },
    d: function() {
      return (() => {
        return this.dev
      })()
    },
    e: function() {
      return this.b()
    },
    f: function() {
      return this.b
    },
    g: function() {
      return this.c()
    },
    h: function() {
      return this.c
    },
    i: function() {
      return () => {
        return this.dev
      }
    }
  }
  /** a is the method inside the obj scope, so this => {dev: 'bfe', a: func()}. hence it is bfe*/
  console.log(obj.a()) // bfe
  
  /** b is the method inside the obj scope, so this => {dev: 'bfe', b: func()}. hence it is bfe*/
  console.log(obj.b()) // bfe
  
  /** c is a arrow function, arrow function point to the outside function scope, 
   * however there is no function that wraps the c, so undefined
   */
  console.log(obj.c()) // undefined
  
  /** its a IIFE arrow function which is wrapped in function whose scope is obj. hence bfe */
  console.log(obj.d()) // bfe
  
  /** this.b() is called inside the function whose scope is obj, hence bfe */
  console.log(obj.e())
  
  /** this.b is return and it is called in console whose scope is window, hence it is undefined */
  console.log(obj.f()())
  
  /** even after attaching this to the arrow function, 
   * it does not affects the underlying properties of the arrow function. hence, undefined*/
  console.log(obj.g())
  
  /**here function is being returned as it is and since we invoke the function in console.log statement 
   * it will point to default window scope, hence undefined */
  console.log(obj.h()())
  
  /** this is a function closure and it will remember the scope of this which is pointing to object's scope only.
   * answer is 'bfe'.*/
  console.log(obj.i()())
  
  