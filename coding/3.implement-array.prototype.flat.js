/** time: o(n)  space: o(n)*/
/**------------type 1------------- */
function flat(arr, depth = 1){
    let result = []
    for(let element of arr){
        if(Array.isArray(element) && depth > 0){
            result.push(...flat(element, depth -1))
        }else{
            result.push(element)
        }
    }

    return result
}

/**------------type 2------------- */

function flatten(arr, depth = 1) {
  let result = []

  function flat(arr, depth){
      for(let element of arr){
          if(typeof element == 'object' && depth > 0){
              flat(element)
          }else{
              result.push(element)
          }
      }
  }
  flat(arr, depth)
  return result;
}

/** -------flaten the object ------ */
function flattenDictionary(dict){
    let flatDictionary = {}
    flattenDictionaryHelper('', dict, flatDictionary)
    return flatDictionary
  }
  
  function flattenDictionaryHelper(initailKey, dict, flatDictionary){
    for(let key in dict){
      let value = dict[key]
      let updatedInitialKey = initailKey ? initailKey + (key ? ('.' + key) : '') : key
  
      if(typeof value != 'object' && typeof value != 'function'){
        flatDictionary[updatedInitialKey] = value
      }else{
        flattenDictionaryHelper(updatedInitialKey, value, flatDictionary)
      }
    }
  }
  
  let dict = {
    "Key1" : "1",
    "Key2" : {
        "a" : "2",
        "b" : "3",
        "c" : {
            "d" : "3",
            "e" : {
                "" : "1"
            }
        }
    }
  }

const arr = [1, [2], [3, [4]]];
console.log(flat(arr)) // [1, 2, 3, [4]]
console.log(flat(arr, 1)) // [1, 2, 3, [4]]
console.log(flat(arr, 2)) // [1, 2, 3, 4]
  
console.log(flattenDictionary(dict))