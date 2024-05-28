function findMostRepeatedNumber(arr) {
    if (arr.length === 0) {
        return null;
    }

    let countMap = {};
    let maxCount = 0;
    let mostRepeatedNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (countMap[num] === undefined) {
            countMap[num] = 1;
        } else {
            countMap[num]++;
        }

        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mostRepeatedNumber = num;
        }
    }

    return `${mostRepeatedNumber} is repeated ${maxCount} times`;
}

let array = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
let result = findMostRepeatedNumber(array);
console.log(result); 
