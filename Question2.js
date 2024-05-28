function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

let string1 = "civic";
let string2 = "honda";

console.log(isPalindrome(string1));
console.log(isPalindrome(string2)); 
