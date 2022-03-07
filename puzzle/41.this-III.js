const obj = {
    a: 1,
    b: this.a + 1,
    c: () => this.a + 1,
    d() {
      return this.a + 1
    },
    e() {
      return (() => this.a + 1)()
    }
  }
  
  console.log(obj.b)
  console.log(obj.c())
  console.log(obj.d())
  console.log(obj.e())
  
  /**
   * NaN  => undefined + 1 => this is window, which doesnt have a
   * NaN  => undefined + 1 => arrow function is lexically scoped. it doesnt have this
   * 2    => d is called from obj. hence 2
   * 2    => e is normal function which returns the arrow function which is lexically scoped and closure. hence 2
   */