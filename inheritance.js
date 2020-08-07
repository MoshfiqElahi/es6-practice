//23.8
// ask Google ==> Object oriented programming core concept/ 3 pillar of Object oriented programming (Interview)

class Father {
    constructor() {
        this.fatherName = "Thomas"
    }
}

class Child extends Father {
    constructor(name) {
        super();
        this.name = name
    }
    getFullName() {   //it is a function. but no need to write function 'getFullName'
        return this.name + " " + this.fatherName
    }
}
//see 23 no line for function

const baby = new Child("Arnold")
const baby2 = new Child("Tom")
console.log(baby2)
console.log(baby.getFullName())