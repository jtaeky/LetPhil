// init students array
const students = [];

// add student
function addStudent(name, grade) {
    students.push({
        name,
        grade,
    })
}

// remove student
function removeStudent(name) {
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(name, "has been removed")
    } else {
        console.log(name, "was not found")
    }
}

// function to filter students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// function to map students in formatted list
function formatStudentList() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}

// start
console.log("students =", students);

// add students
addStudent("Bobby", 90);
addStudent("Freddie", 80);
addStudent("Mary", 89);
addStudent("Larry", 87);
addStudent("Sally", 98);

console.log("Student List:");
console.log(formatStudentList());
console.log(filterTopStudents(90));

removeStudent("Freddie");

console.log("Student List:");
console.log(formatStudentList());
console.log(filterTopStudents(90));