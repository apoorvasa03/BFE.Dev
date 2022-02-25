/** What does the code snippet to the right output by console.log? */

/**
 * the function inside the setTimeout is closure
 * closure remember the lexical scope of the outside function 
 * closure remembers the memory reference of the variable and not the value of the varible
 */


/** here var is global varible, during each iteration closure remembers the reference of the i and execute after timer.
 * by the time is timed out and i value will be 5. and all the closure points to same i reference which is 5 now
 * hence all the console will be 5
 */
 for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}

/** let is block scope, during each loop new i will be create with differet refernce location and closure remember the
 * reference of i hence the consol will be 0, 1, 2, 3, 4, 5 */ 
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}



// EXTRA => using var display 0, 1, 2, 3, 4
for (var i = 0; i < 5; i++) {
    setTimeout((n) => console.log(n), 0, i) 
}

// for (var i = 0; i < 5; i++) {
//     function close(x){
//         setTimeout(() => console.log(x), 0) 
//     }
//     close(i)
// }

/* output: 
5
5
5
5
5


0
1
2
3
4

0
1
2
3
4


**/