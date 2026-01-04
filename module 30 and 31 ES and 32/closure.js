
function sum(){

    let cnt=0;

    function inner(){

        cnt++;

        console.log(cnt);
    }

    return inner;

}

//as the inner is return to the res1 so now res1 turns into the inner function and to wrok with the inner function the javascript save the cnt eventhough the work of the sum is finished
const res1 = sum();
res1();
res1();

const res2=sum();
res2();


/**
 * ✅ Closure Summary (Very Easy Points)
1. A closure happens when an inner function remembers the variables of its outer function.
2. Even after the outer function has finished, its variables are not deleted if the inner function needs them.
3. The inner function “carries” the outer function’s variables with it (this is its lexical environment).
4. When you return an inner function, you actually return the function itself — NOT its result.
5. The returned function can be stored in a variable (example: const fun = outer();).
6. When you call that stored function (fun()), it still has access to the outer function’s variables.
7. Those variables maintain their updated values between calls (example: count becomes 1 → 2 → 3).
8. This “memory” of variables is called a CLOSURE.
9. Closures allow:

private variables

counters

modules

state management

callbacks & event handlers

10. Shortest one-line definition:

Closure = function + its remembered surrounding variables.
 */