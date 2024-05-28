function findMissingElements(arr) {
    if (arr.length === 0) {
        return [];
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let elementsSet = new Set(arr);

    let missingElements = [];

    for (let i = 0; i <= max; i++) {
        if (!elementsSet.has(i)) {
            missingElements.push(i);
        }
    }

    return missingElements;
}

let array = [3, 4, 9, 1, 7, 3, 2, 6];
let missingNumbers = findMissingElements(array);
console.log(missingNumbers);  
