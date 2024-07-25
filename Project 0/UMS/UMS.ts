/*
Assignment  : 02
Title       : University Management System
Date        : 14th June 2024
*/

///////////////////////////////// Class Declration ///////////////////////
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}

class Course {
    id: number;
    name: string;
    students: Student[] = [];   
    instructor: Instructor[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.students = [];
    }

    addStudent(student: Student, course: Course): void {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
        student.registerForCourse(course);
        console.log("Student: ",student)
        this.students.push(student);
        console.log("aaaaaaaaa",this.students[0].courses[0].name)
    }

    // addStudent(student: Student): void {
    //     this.students.push(student);
    // }

    setInstructor(instructor: Instructor, course: Course): void {
        this.instructor.push(instructor);
        instructor.assignCourse(course);
    }
}

class Student extends Person {
    id: number;
    courses: Course[] = [];

    constructor(name: string, age: number, id: number) {
        super(name, age);
        this.id = id;
        this.courses = [];
    }

    registerForCourse(course: Course): void {
        this.courses.push(course);
    }
}

class Instructor extends Person {
    salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }

    assignCourse(course: Course): void {
        this.courses.push(course);
    }
}

class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
        this.courses = [];
    }

    addCourse(course: Course): void {
        this.courses.push(course);
    }
}

const student1 = new Student('Ali', 19, 123);
const student2 = new Student('Talha', 20, 3210);

const instructor1 = new Instructor('Umer', 35, 200000);
const instructor2 = new Instructor('Zubair', 30, 180000);

const course1 = new Course(1, 'Introduction to Computer Science');
// const course2 = new Course(2, 'Introduction to Programming');
// const course3 = new Course(3, 'Introduction to A.I.');

const compSciDept = new Department('Computer Science');

compSciDept.addCourse(course1);
// compSciDept.addCourse(course2);
// compSciDept.addCourse(course3);
course1.addStudent(student1, course1);
// course1.addStudent(student2, course1);

student1.registerForCourse(course1);
console.log(student1);
// student2.registerForCourse(course1);


course1.setInstructor(instructor1, course1)

// console.log(course1.id); // Output: Alice
console.log(course1);

// console.log(student1.courses); // Output: [Course]
// console.log(instructor1.courses); // Output: [Course]
// console.log(compSciDept.courses); // Output: [Course, Course]
