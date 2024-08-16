export default function updateStudentGradeByCity(students, city, grades) {
  const studentsCity = students.filter((student) => (student.location === city));

  function addGrade(student) {
    let grade = 'N/A';

    grades.forEach((element) => {
      if (element.studentId === student.id) {
        grade = element.grade;
      }
    });

    let nst = student;
    nst.grade = grade;
    return nst;
  }

  return studentsCity.map(addGrade);
}
