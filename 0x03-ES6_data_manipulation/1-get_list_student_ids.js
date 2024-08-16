export default function getListStudentIds(list) {
  const listids = [];

  if (!Array.isArray(list)) return ([]);

  for (const stud of list) {
    listids.push(stud.id);
  }

  return (listids);
}
