function Student(id, firstName, location) {
  return {
    id,
    firstName,
    location,
  };
}

export default function getListStudents() {
  const list = [];

  list.push(new Student(1, 'Guillaume', 'San Francisco'));
  list.push(new Student(2, 'James', 'Columbia'));
  list.push(new Student(5, 'Serena', 'San Francisco'));

  return (list);
}
