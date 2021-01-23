class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if (this.students.filter(s => s.email === student.email).length) {
            console.log(`The student ${student.email} is already registered!`);
        } else {
        this.students.push(student);
        console.log(`Registering ${student.email} to the bootcamp ${this.name}.`)
    }
    return this.students;
    }   
}
// if(this.students.includes(student.email)) alternate way to use it


const webDevFundamentals = new Bootcamp ("name", "level");
    webDevFundamentals.registerStudent();


           

    