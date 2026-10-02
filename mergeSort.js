function mergeSort(array) {
    // Base case:
    // 0 ya 1 element ka array already sorted hota hai
    if (array.length <= 1) {
        return array;
    }

    // Array ko middle se divide karo
    const middle = Math.floor(array.length / 2);

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively dono parts ko sort karo
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Dono sorted arrays ko merge karo
    const result = [];

    let i = 0;
    let j = 0;

    while (i < leftSorted.length && j < rightSorted.length) {
        if (leftSorted[i] <= rightSorted[j]) {
            result.push(leftSorted[i]);
            i++;
        } else {
            result.push(rightSorted[j]);
            j++;
        }
    }

    // Left me agar kuch elements bach gaye
    while (i < leftSorted.length) {
        result.push(leftSorted[i]);
        i++;
    }

    // Right me agar kuch elements bach gaye
    while (j < rightSorted.length) {
        result.push(rightSorted[j]);
        j++;
    }

    return result;
}


// Test examples

console.log(mergeSort([]));

console.log(mergeSort([73]));

console.log(mergeSort([1, 2, 3, 4, 5]));

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

console.log(mergeSort([105, 79, 100, 110]));