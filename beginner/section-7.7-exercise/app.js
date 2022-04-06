/* 
 * Create function with 3 numerics parameters (a, b, c), the function should be
 * called max, it should determine which is the largest of the 3 and print out
 */

function max(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

let big = max(8, 100, 6);

console.log(big);