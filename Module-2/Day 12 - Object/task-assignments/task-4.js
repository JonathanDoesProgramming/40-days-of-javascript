// Student Management System
const Student = function (name, age, grades) {
    this.studentName = name;
    this.studentAge = age;
    this.studentGrade = {
        grade: grades,
        averageGrade: function () {
            const [grade1, grade2, grade3] = this.grade;
            return `
            Average grade: ${(grade1 + grade2 + grade3) / 3}
            `
        }
    }; 
}
const student1 = new Student('Juan Dela Cruz', 10, [90, 91, 90]);
const student2 = new Student('Tom', 11, [87, 60, 15]);
const student3 = new Student('Jerry', 12, [50, 67, 60]);
console.log(student1.studentGrade.averageGrade());