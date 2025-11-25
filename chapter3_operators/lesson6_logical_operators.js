console.log('OR operator');
console.log('true || true = ' + (true || true));
console.log('false || true = ' + (false || true));
console.log('true || false = ' + (true || false));
console.log('false || false = ' + (false || false));

let hasReservation = true;
let acceptingWalkIns = false;
const hasAccessToTable = hasReservation || acceptingWalkIns;
console.log(hasAccessToTable);

console.log('AND operator');
console.log('true && true = ' + (true && true));
console.log('false && true = ' + (false && true));
console.log('true && false = ' + (true && false));
console.log('false && false = ' + (false && false));

let age = 15;
let hasCar = true;

const canDrive = age >= 16 && hasCar;
console.log('canDrive = ' + canDrive);

if (!canDrive) {
    console.log('Go for a walk!');
}

let a = null;
const result = a ?? false;
console.log('result = ' + result);