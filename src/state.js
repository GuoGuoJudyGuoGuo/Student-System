class Student {
    constructor(studentId, name, assignedTeacher, progressGrade, finalGrade) {
        this.studentId = studentId; // Unique identifier for the student
        this.name = name; // Name of the student
        this.assignedTeacher = assignedTeacher; // Teacher assigned to the student
        this.progressGrade = progressGrade; // Current progress grade
        this.finalGrade = finalGrade; // Final grade for the course
    }
    clone() {
        return new Student(
            this.studentId,
            this.name,
            this.assignedTeacher,
            this.progressGrade,
            this.finalGrade
        );
    }
}

const teacherStudentMap = new Map([
    ['Alice', [
        new Student(1, "John", "Alice", 85, 90),
        new Student(3, "Jack", "Alice", 88, 92)
    ]],
    ['Bob', [
        new Student(2, "Jane", "Bob", 78, 80)
    ]],
    ['Charlie', [
        new Student(4, "Jill", "Charlie", 82, 85)
    ]],
    ['David', [
        new Student(5, "Joe", "David", 75, 78)
    ]],
    ['Eva', [
        new Student(6, "Joy", "Eva", 90, 95)
    ]]
]);



export { Student, teacherStudentMap};
