// We can return a value and we can don't return, but by default undefined will be returned
function multiply(num1, num2) {
    if (num1 == 0) return;
    return num1 * num2;
}

console.log(multiply(2, 3));
console.log(multiply(0, 3));