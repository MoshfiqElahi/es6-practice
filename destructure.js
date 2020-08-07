// 23.9

const person = { name: 'Jack William', age: 17, job: 'facebook', phone: '01879911262', friend: ['Tom Hacks', 'Tom cruise', 'Tom Yarn'], address: 'Dhaka', gfName: "Ema Watson", father: "Jack first" }
console.log(person.job) //to know about job only!

//You can find out result in a different way
const age = person.age;
console.log(age)

//
const { phone } = person;  //now {phone} is not a var name, it is object type var
console.log(age, phone)

//for more property
const { gfName, job, father } = person;
console.log(gfName, job, father)

//array de-structure
const friends = ['amin khan', 'salmna khan', 'sahruk khan', 'arman khan', 'amir khan', 'sakib khan']
// const [miniFriend]= friends //it will ans the first one 
// console.log(miniFriend)
// const [miniFriend, tallFriend]= friends //it will ans the first two
// console.log(miniFriend, tallFriend)
const [miniFriend, tallFriend, ...restFrnd] = friends //it will ans all
console.log(miniFriend, tallFriend, restFrnd) //it will ans all

//complex Object
const complexObject = {
    name: 'Moshfiq',
    info: {
        currentAddress: 'Chittagong',
        leader: 'Tiger Team'
    }
}
const { leader } = complexObject.info;
console.log(leader)