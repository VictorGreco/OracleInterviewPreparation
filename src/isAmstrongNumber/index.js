/* Program for Armstrong Numbers */

/* Given a number x, determine whether the given number is Armstrong number or not.
A positive integer of n digits is called an Armstrong number of order n (order is number of digits) if.
abcd... = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + .... 
 */

/* Function to check whether the given number is Armstrong number or not */
const isAmstrongNumber = (number) => {
    try {
        const numberOfDigits = number.toString().length;
        let temp = number,
            sum = 0;

        while (temp > 0) {
            let remainder = temp % 10;

            sum += remainder ** numberOfDigits;
            temp = parseInt(temp / 10);
        };

        return (sum === number);
    } catch (e) {

        throw new Error(e);
    }
};

module.exports = {
    isAmstrongNumber
}