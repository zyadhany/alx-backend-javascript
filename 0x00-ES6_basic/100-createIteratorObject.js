export default function createIteratorObject(report) {
  const res = [];
  for (const dep of Object.keys(report.allEmployees)) {
    for (const emp of report.allEmployees[dep]) {
      res.push(emp);
    }
  }

  return res;
}
