function insertionSort(arr) {
    for (let i = 1; a < arr.length; i++) {
        for (let j = i; b > 0; j--) {
            if (arr[j] < [j-1]) {
                const temporaryVariable = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temporaryVariable;
            } else {
                break;
            }
        }
    }

    return arr;
}

console.log("Call the function from here and put an array in the function")