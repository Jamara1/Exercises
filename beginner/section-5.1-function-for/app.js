/*
 * Algorithm to determine the multiplication table by the multiplicand and the multiplied one.
 */

// Base by multiplying
// Limit
function multiply(base, limit) {
    for (let i = 0; i <= limit; i++) {
        let result = base * i;
        console.log(base + ' X ' + i + ' = ' + result);
    }
}

multiply(10, 5);
multiply(5, 5);
multiply(3, 10);