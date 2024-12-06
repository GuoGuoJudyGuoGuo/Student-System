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
        new Student(2, "Shahai", "Alice", 84, 62),
        new Student(3, "Jack", "Alice", 88, 92),
        new Student(4, "Jokoi", "Alice", 34, 90),
        new Student(6, "Mochila", "Alice", 85, 94),
        new Student(8, "Boloka", "Alice", 85, 60),
        new Student(25, "Rushua", "Alice", 48, 96),
        new Student(28, "Sihijg", "Alice", 85, 40),

    ]],
    ['Bob', [
        new Student(22, "Jane", "Bob", 78, 80),
        new Student(23, "Ujsu", "Bob", 85, 90),
        new Student(24, "Kidsj", "Bob", 88, 52),
        new Student(26, "sjad", "Bob", 95, 90),
        new Student(27, "Shuiy", "Bob", 88, 92),
        new Student(29, "JoKui", "Bob", 95, 30),
        new Student(30, "Koi", "Bob", 87, 12)
    ]],
    ['Charlie', [
        new Student(5, "Wad", "Charlie", 82, 85),
        new Student(7, "Lays", "Charlie", 89, 65),
        new Student(9, "Jysa", "Charlie", 80, 83),
        new Student(10, "Qsdj", "Charlie", 82, 65),
        new Student(12, "Tsd", "Charlie", 88, 86),
    ]],
    ['David', [
        new Student(13, "Oyee", "David", 75, 98),
        new Student(15, "Wyt", "David", 85, 78),
        new Student(17, "Kmay", "David", 89, 88),
        new Student(21, "Kyas", "David", 74, 68)
    ]],
    ['Eva', [
        new Student(14, "Kya", "Eva", 90, 96),
        new Student(16, "Eys", "Eva", 92, 65),
        new Student(18, "Poshya", "Eva", 40, 85),
        new Student(19, "Eahc", "Eva", 95, 97),
        new Student(20, "Jpui", "Eva", 0, 92)
    ]]
]);



export { Student, teacherStudentMap};
