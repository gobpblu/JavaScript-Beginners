// falsy values in JS are: undefined, null, 0, '', false, NaN
// truthy values in JS are: everything else
let isTruthy = 'Max' || false;
let isFirstNumber = false || 1 || 2;
console.log(isFirstNumber);

let usersChosenColor = '';
let defaultColor = 'red';

const currentColor = usersChosenColor || defaultColor;
console.log(currentColor);