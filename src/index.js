/**
 * Created by swapnil.bawkar on 5/5/2015.
 */
module.exports = function (xs, f) {
    return xs.reduce(function (max, x) {
        return f(x) > f(max) ? x : max;
    });
};