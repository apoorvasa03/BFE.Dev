function a() {
    console.log(1)
    return {
      a: function() {
        console.log(2)
        return a()
      }
    }
  }
  
a().a()

/**
 1      => outer function is called
 2      => outer function return a object which as 'a' function. calling that function log 2. 
 1      => inner function return a(), which refers to outer function
 */