/* Example number 1 of promises */
console.log('Start');


const prom1 = new Promise((response, error) => {

    setTimeout(() => {
        error('Successfully!');
    }, 1000);
});

prom1.then(message => console.log(message))
.catch(error => console.warn(error));

console.log('End');


/* Example number 2 of promises */
const withdrawals = (amountWithdraw: number): Promise<number> => {
    let moneyCurrent = 1000;

    return new Promise((response, error) => {
        if (amountWithdraw > moneyCurrent) {
            error('Insufficient funds!');
        } else {
            moneyCurrent -= amountWithdraw;
            response(moneyCurrent);
        }
    });
}

withdrawals(500)
.then(moneyCurrent => console.log(`I have ${moneyCurrent}`))
.catch(console.warn);

export default {}