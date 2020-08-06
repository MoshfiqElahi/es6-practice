//23.5

//1st system to declare function
function doubleIt(num) {
    return num * 2
}
const result = doubleIt(5)
console.log(result)

//2nd system to declare function

const doubleThis = function myFun(num) {
    return num * 2
}
const resultTwo = doubleThis(20)
console.log(resultTwo)

//3rd system to declare function (arrow function) //single value
const doubleNow = num => num * 2;
const resultNow = doubleNow(50)
console.log(resultNow)

// add 2 values by arrow function 
const add = (x, y) => x + y;
const addResult = add(10, 30)
console.log(addResult)

//No parametre added here!
const give5 = () => 5
const result2 = give5()
console.log(result2)

//big function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const resultOfDoMath = sum * diff
    return resultOfDoMath
}
const resultThree = doMath(7, 5)
console.log(resultThree)

