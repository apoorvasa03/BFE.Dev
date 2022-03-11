/**
 * Prototype: is object that is associated with every funtion and objects by default in js. 
 * its a machanism by with the javascript object inherit features from other object.
 * 
 */

function F() {
    this.foo = 'bar'
  }
  
  const f = new F()
  console.log(f.prototype)

  /**
   undefined
   */