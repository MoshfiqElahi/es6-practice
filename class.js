// 23.7

class Student {  //class will be upperClass. Write Student not student
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.scholl = "Kalusah Madrasah"
    }

}

const student1= new Student(12, "Karim Ullah");
const Student2 = new Student(22, "Riyadul Islam");
console.log(student1, Student2)

// u can see the value of name by console.log(student1.name)