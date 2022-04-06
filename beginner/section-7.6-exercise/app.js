/* 
 * Create an algorithm that allows the following table to be printed on the console
 *
 * Example
 * 1 2 3 4 5
 * 2 4 6 8 10
 * 3 6 9 12 15
 * 4 8 12 16 20
 * 5 10 15 20 25
 */

function getTable() {
    for (let i = 1; i <= 5; i++) {
        let line = '';

        for (let j = 1; j <= 5; j++) {
            line += `${j*i} `;
        }

        console.log(line);
    }
}