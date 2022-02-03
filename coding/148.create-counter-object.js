  /* --------- type 1 -------------*/
  // to have a object like property for a function we use get and set
function createCounter1() {
    let counter = -1;
    return {
      get count() {
        counter += 1; 
        return counter;
      }
    }
  }

  /* --------- type 2 -------------*/
  function createCounter2(){
      let obj = {
          num: 0,
          get count(){
            return this.num++
          }
      }
      return obj
  }


  /* --------- type 3 -------------*/
  function createCounter3(){
      let obj = {
          num: 0
      }

      Object.defineProperty(obj, 'count', {
          get: function(){
              return obj.num++
          }
      })

      return obj
  }

let counter = createCounter()

console.log(counter.count)
console.log(counter.count)
console.log(counter.count == 100)
console.log(counter.count)