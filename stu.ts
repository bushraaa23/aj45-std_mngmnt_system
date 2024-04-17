#! /usr/bin/env node


class School {
    name: string;
    students:Student[]=[]
    teachers:Teacher[]= []
    addStudent(stdobj:Student){
        this.students.push(stdobj) 
    }
    addTeacher(teachobj:Teacher){
        this.teachers.push(teachobj) 
    }
    constructor(name:string){
        this.name=name;
    }
}
class Student {
name:string;
age:number;
schoolName:string;

constructor(name:string,age:number,scholl:string){
    this.name=name;
    this.age=age;
    this.schoolName=scholl;
}
}
class Teacher extends Student{}


// school
let school1 = new School("Falcon house")
let scholl2 = new School("SMB public School")
let school3 = new School("Sir Syed School")


//student

let std1 = new Student("sara",10,school1.name)
let std2 = new Student("iqsa",13,scholl2.name)
let std3 = new Student("Bisma",14,school3.name)


// teacher

let t1 = new Teacher("ayesha",23,school1.name)
let t2 = new Teacher("Hina",25,scholl2.name)
let t3 = new Teacher("Anum",28,school3.name )

school1.addStudent(std1)
scholl2.addStudent(std2)
school3.addStudent(std3)

school1.addTeacher(t1)
scholl2.addTeacher(t2)
school3.addTeacher(t3)

console.log(std1);
console.log(std2);
console.log(std3);


console.log(t1);
console.log(t2);
console.log(t3);


console.log(school1);
console.log(scholl2);
console.log(school3);




