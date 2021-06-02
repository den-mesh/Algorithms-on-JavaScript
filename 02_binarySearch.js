const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, element) {
    let left = -1;
    let right = arr.length;

    while (right - left > 1) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === element) {
            return middle;
        }
        if (arr[middle] > element) {
            right = middle;
        } else {
            left = middle;
        }
    }
    return -1;
}


