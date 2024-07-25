/*
Assignment  : 02
Title       : University Management System
Date        : 14th June 2024
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///////////////////////////////// Class Declration ///////////////////////
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
        this.students = [];
    }
    Course.prototype.addStudent = function (student, course) {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
        student.registerForCourse(course);
        console.log("Student: ", student);
        this.students.push(student);
        console.log("aaaaaaaaa", this.students[0].courses[0].name);
    };
    // addStudent(student: Student): void {
    //     this.students.push(student);
    // }
    Course.prototype.setInstructor = function (instructor, course) {
        this.instructor.push(instructor);
        instructor.assignCourse(course);
    };
    return Course;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, id) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.id = id;
        _this.courses = [];
        return _this;
    }
    Student.prototype.registerForCourse = function (course) {
        this.courses.push(course);
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = salary;
        _this.courses = [];
        return _this;
    }
    Instructor.prototype.assignCourse = function (course) {
        this.courses.push(course);
    };
    return Instructor;
}(Person));
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
        this.courses = [];
    }
    Department.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Department;
}());
var student1 = new Student('Ali', 19, 123);
var student2 = new Student('Talha', 20, 3210);
var instructor1 = new Instructor('Umer', 35, 200000);
var instructor2 = new Instructor('Zubair', 30, 180000);
var course1 = new Course(1, 'Introduction to Computer Science');
// const course2 = new Course(2, 'Introduction to Programming');
// const course3 = new Course(3, 'Introduction to A.I.');
var compSciDept = new Department('Computer Science');
compSciDept.addCourse(course1);
// compSciDept.addCourse(course2);
// compSciDept.addCourse(course3);
course1.addStudent(student1, course1);
// course1.addStudent(student2, course1);
student1.registerForCourse(course1);
console.log(student1);
// student2.registerForCourse(course1);
course1.setInstructor(instructor1, course1);
// console.log(course1.id); // Output: Alice
console.log(course1);
// console.log(student1.courses); // Output: [Course]
// console.log(instructor1.courses); // Output: [Course]
// console.log(compSciDept.courses); // Output: [Course, Course]
