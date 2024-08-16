export default function getStudentsByLocation(students, location) {
  function filtration(student) {
    return (student.location === location);
  }

  const firtStud = students.filter((student) => (student.location === location));

  return firtStud;
}
