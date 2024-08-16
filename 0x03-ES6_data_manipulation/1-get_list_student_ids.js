export default function getListStudentIds(list) {
  if (!Array.isArray(list)) return ([]);

  const listids = list.map((stud) => stud.id);

  return (listids);
}
