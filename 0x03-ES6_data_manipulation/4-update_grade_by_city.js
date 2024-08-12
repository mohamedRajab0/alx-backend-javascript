export default function updateStudentGradeByCity(arr, city, newGrades) {
    return arr
        .filter((student) => student.location === city)
        .map((student) => {
            const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
            student.grade = gradeObj ? gradeObj.grade : 'N/A';
            return student;
        });
}
