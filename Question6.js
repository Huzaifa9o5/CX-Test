function rotateArrayRight(arr) {
    let n = arr.length;
    if (n === 0 || n === 1) {
        return arr;
    }

    let lastElement = arr[n - 1];

    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;

    return arr;
}

let array = [3, 8, 9, 7, 6];
let rotatedArray = rotateArrayRight(array);
console.log(rotatedArray); 
