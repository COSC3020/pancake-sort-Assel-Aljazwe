function flip(array, n) {
    let subArray = array.slice(0, n);
    subArray.reverse();
    return subArray.concat(array.slice(n));
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let i = array.length; i > 1; i--) {
        // Finding the index of the largest element in the unsorted portion of the array
        let maxIdx = 0;
        for (let j = 1; j < i; j++) {
            if (array[j] > array[maxIdx]) {
                maxIdx = j;
            }
        }
        // Bring the largest element to the front, if it's not already there
        if (maxIdx !== 0) {
            array = flip(array, maxIdx + 1);
        }
        // flip the largest element to its correct position
        array = flip(array, i);
    }
    return array;
}


