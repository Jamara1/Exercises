/* 
 * Calculate the area of a right triangle of base 10 and height 5
 */

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

function getLargerNumber(numbers) {
    let num = 0;
    for (let i = 0; i <= numbers.length; i++) {
        if (num < numbers[i]) num = numbers[i];
    }

    console.log(num);
}