//23.3

function add(num1, num2) {
    return num1 + num2;
}
const total = add(15, 14)
console.log(total)

//When NUM2 is defined
function addOne(num1, num2) {
    num2 = num2 || 5; //if you set 10/20 or any number in the place of 0. It will add this number with NUM1
    return num1 + num2;
}
const totalOne = addOne(15)
console.log(totalOne)

//we can set a default value in a different way //new system of ES6
function addTwo(num1, num2 = 15) {
    return num1 + num2;
}
const totalTwo = addTwo(15)
console.log(totalTwo)