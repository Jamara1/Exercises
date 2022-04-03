/*
 * Create an algorithm to determine the letter grade of a student.
 *
 * If grade is between 90 to 100 = A
 * If the grade is between 80 to 89 = B
 * If the grade is between 70 to 79 = C
 * If the grade is between 60 to 69 = D
 * If the grade is lower than 60 = f
 */


let result = 100;
let resultLetter = '';

if (result > 100 || result < 0) {
    console.log('Enter a correct value!');
} else {
    if (result >= 90) {
        resultLetter = 'A';
    } else if (result >= 80) {
        resultLetter = 'B';
    } else if (result >= 70) {
        resultLetter = 'C';
    } else if (result >= 60) {
        resultLetter = 'D';
    } else {
        resultLetter = 'F';
    }

    console.log(result + ' is equal to ' + resultLetter);
}