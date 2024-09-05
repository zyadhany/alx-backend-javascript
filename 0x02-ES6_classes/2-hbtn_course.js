import Student from './Student.js';

export default function initialize() {
  const students = [];
  students.push(new Student(19));
  students.push(new Student(20));
  students.push(new Student(34));

  return students;
}
