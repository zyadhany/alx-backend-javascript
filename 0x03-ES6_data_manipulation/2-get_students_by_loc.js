export default function getStudentsByLocation(students, location) {
  return students.filter((student) => (student.location === location));
}
