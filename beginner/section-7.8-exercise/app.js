/* 
 * Create function that receives an array as a parameter, the function should
 * return the name with most letters in the array
 */

function mustLargest(heroes) {
    let name = '';

    for (let i = 0; i < heroes.length; i++) {
        const element = heroes[i];
        if (name.length < element.length) {
            name = element;
        }
    }

    return name
}


let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroeMustLetters = mustLargest(heroes);

console.log(heroeMustLetters); // Profesor Charles Xavier