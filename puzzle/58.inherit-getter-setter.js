
// https://stackoverflow.com/questions/53584705/javascript-extending-es6-class-setter-will-inheriting-getter
let val = 0

class A {
  set foo(_val) {
    val = _val
  }
  get foo() {
    return val
  }
}

class B extends A { }

class C extends A {
  get foo() {           
    return val
  }
}

const b = new B()
console.log(b.foo)
b.foo = 1
console.log(b.foo)

const c = new C()
console.log(c.foo)
c.foo = 2
console.log(c.foo)
console.log(b.foo)

/**
 0
 1
 1
 1 // js has something called property descrptor, when an object as get property, set default become undefined.
        here C to extends the base class A, but it has one descritor which shadow the entire descriptor of the base class with set undefined
 1
 */