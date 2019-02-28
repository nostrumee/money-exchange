// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let h = 50;
    let q = 25;
    let d = 10;
    let n = 5;
    let result = {};

    if (currency <= 0) {
        return result;
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    if (currency / h >= 1) {
        result.H = Math.floor(currency / h);
        currency %= h;
    } 
    if (currency / q >= 1) {
        result.Q = Math.floor(currency / q);
        currency %= q;
    } 
    if (currency / d >= 1) {
        result.D = Math.floor(currency / d);
        currency %= d;
    }
    if (currency / n >= 1) {
        result.N = Math.floor(currency / n);
        currency %= n;
    }
    if (currency !== 0) {
        result.P = currency;
    }

    return result;
}