function Foo() { }
Foo.prototype.bar = 1
const a = new Foo()
console.log(a.bar)

Foo.prototype.bar = 2
const b = new Foo()
console.log(a.bar)
console.log(b.bar)

Foo.prototype = {bar: 3} // when new prototype object is created, previously create obj connections is lost. the newly create object will have fo connection
const c = new Foo()
console.log(a.bar)
console.log(b.bar)
console.log(c.bar)

/**
 1
 2
 2
 2
 2
 3

 */