export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(({ location }) => location === city)
    .map((student) => {
      const grade = newGrades.find(({ studentId }) => studentId === student.id) || 'N/A';
      return { ...student, grade };
    });
}
