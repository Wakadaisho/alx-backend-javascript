export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(({ location }) => location === city)
    .map((student) => {
      let grade = newGrades.find(({ studentId }) => studentId === student.id);
      if (grade) {
        grade = grade.grade;
      } else {
        grade = 'N/A';
      }
      return { ...student, grade };
    });
}
