/*
 * Algorithm to determine the multiplication table by the multiplicand and the multiplied one.
 */

// by multiplying
let base = 10;

// limit
let limit = 5;

for (let i = 0; i <= limit; i++) {
    let result = base * i;
    console.log(base + ' X ' + i + ' = ' + result);
}