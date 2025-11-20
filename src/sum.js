function sum(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error('Both arguments are required');
    }

    return a + b;
}
module.exports = {
    sum,
};