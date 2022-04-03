/*
 * When entering a day number, it corresponds as follows.
 *
 * 0 is Sunday
 * 1 is Monday
 * 2 is Tuesday 
 * 3 is Wednesday
 * 4 is Thursday
 * 5 is Friday
 * 6 is Saturday
 */
let day = 6; // Monday, 2= Tuesday... 0= Sunday
let message;

switch (day) {
    case 0:
        message = 'Sunday';
        break;
    case 1:
        message = 'Monday';
        break;
    case 2:
        message = 'Tuesday';
        break;
    case 3:
        message = 'Wednesday';
        break;
    case 4:
        message = 'Thursday';
        break;
    case 5:
        message = 'Friday';
        break;
    case 6:
        message = 'Saturday';
        break;
    default:
        console.log('Enter a correct value!');
        break;
}

console.log('Today is: ' + message);