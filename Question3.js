function sumOfTwoLargestNumbers(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let firstMax = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }

    return firstMax + secondMax;
}

let array = [4, 9, 2, 6, 12, 36];
let result = sumOfTwoLargestNumbers(array);
console.log(result);
