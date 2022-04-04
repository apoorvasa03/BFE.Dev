
/**
* The debounce() function forces a function to wait a certain amount of time before running again.
its a programming practice used to ensure that time-consuming tasks do not fire so often.

* its a higher order function

* A debounce is utilized when you only care about the final state

* For example, waiting until a user stops typing to fetch typeahead search results

* source : https://www.youtube.com/watch?v=B1P3GFa7jVc (techsith)
*/

function debounce(func, delay){
    let timeoutId; 
    return function(...arg){
        if(timeoutId) clearTimeout(timeoutId) // closure
        timeoutId = setTimeout(() => {
            func(...arg)
        }, delay)
    }
} 