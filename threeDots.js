//23.6
//converting Three array in One
const ages = [10, 7, 3, 9]
const agesTwo = [11, 17, 13, 19]
const agesThree = [21, 27, 23, 29]
const allAges = ages.concat(agesThree).concat([5]).concat(agesThree) // old and unclear system to convert three array in One!
console.log(allAges)
const allAgesTwo = [...ages, ...agesTwo, 5, ...agesThree] //clean and smart way to convert three array in One!
console.log(allAgesTwo)

//find out maximum number from 3 variable
const minister = 400;
const writer = 200;
const developer = 650;
const maximum = Math.max(minister, writer, developer)
console.log(maximum)

//if it is in a array, how will u find max?
const moneyDollar = [400, 200, 750]
// const mathMax = Math.max(moneyDollar)
const mathMax = Math.max(...moneyDollar) //right way!
console.log(mathMax)