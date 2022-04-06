/* 
 * Create function that receives an array as a parameter, the function must
 * return another array but filtering all the names that starting with a give letter
 */

function filterName(arr, letter) {
    let filtered = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element[0] === letter) {
            filtered.push(element);
        }
    }

    return filtered;
}

let heroes = ['Doom', 'Dr.Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesWith = filterName(heroes, 'S');

console.log(heroesWith); // She Hulk, Spiderman