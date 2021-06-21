"use strict";
let dateNow = new Date();
let yearNow = dateNow.getFullYear();

//User
class User {
    constructor(data) {
        this.name = data.name;
        this.surname = data.surname;
        this.status = data.status;
    }
    getFullName() {
        return this.name + " " + this.surname;
    }
}

let user1 = new User({name: "Alex", surname: "Sokolov", status: "teacher"});
console.log(user1.getFullName());

//Student
class Student extends User{
    constructor(data) {
        super(data);
        this.year = data.year;
    }

    getCourse() {
        return `${this.name} учится на ` + [yearNow - this.year] + " курсе";
    }
}

let user2 = new Student({name: "Misha", surname: "Popov", status: "student", year: "2019"});
console.log(user2.getFullName());
console.log(user2.getCourse());

//Teacher
class Teacher extends User{
    constructor(data) {
        super(data);
        this.subjects = data.subjects;
        this.salary = data.salary;
    }

    getCourse() { 
        return "преподает: " + this.subjects + " и получает зарплату: " + this.salary;
    }
}

let user3 = new Teacher({name: "Olga", surname: "Ivanova", status: "teacher", subjects: ["mathematic", "language", "literature"], salary: "2000$"});
console.log(user3.getFullName());
console.log(user3.getCourse());

