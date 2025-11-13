function sum(a, b) {
    if (typeof a === undefined || typeof b === 'undefined') {
        return new Error('Both arguments are required');
    }
    
    return a + b;
}
module.exports = {
    sum,
};