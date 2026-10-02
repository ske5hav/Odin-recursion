// fibonacci.js

// Fibonacci using iteration
function fibs(n) {
    if (n <= 0) {
        return [];
    }

    if (n === 1) {
        return [0];
    }

    const result = [0, 1];

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}


// Fibonacci using recursion
function fibsRec(n) {
    if (n <= 0) {
        return [];
    }

    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0, 1];
    }

    const result = fibsRec(n - 1);

    result.push(
        result[result.length - 1] +
        result[result.length - 2]
    );

    return result;
}


// Testing fibs
console.log("fibs(8):");
console.log(fibs(8));

console.log("fibs(5):");
console.log(fibs(5));

console.log("fibs(1):");
console.log(fibs(1));


// Testing fibsRec
console.log("fibsRec(8):");
console.log(fibsRec(8));

console.log("fibsRec(5):");
console.log(fibsRec(5));

console.log("fibsRec(1):");
console.log(fibsRec(1));