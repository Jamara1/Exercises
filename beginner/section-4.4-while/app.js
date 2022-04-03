/*
 * Realize an algorithm that reduces gasoline one by one.
 */
let gasoline = 3;

while (gasoline > 0) {
    console.log('Remaining gasoline ' + gasoline);

    // gasoline = gasoline -1;
    gasoline--;
}

console.log('No more gasoline');