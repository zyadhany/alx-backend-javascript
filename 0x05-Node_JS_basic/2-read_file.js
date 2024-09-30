const fs = require('fs');

module.exports = function read(dataPath) {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const fields = {};
  const students = {};
  for (const line of fileLines) {
    const items = line.split(',');
    if (fileLines.indexOf(line) === 0) {
      for (const item of items) {
        fields[items.indexOf(item)] = item;
      }
    } else {
      const student = {};
      for (const item of items) {
        student[fields[items.indexOf(item)]] = item;
      }
      if (student.firstname !== 'firstname') {
        if (!students[student.field]) {
          students[student.field] = [];
        }
        students[student.field].push(student);
      }
    }
  }

  console.log(`Number of students: ${fileLines.length - 1}`);
  for (const field in students) {
    if (field) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].map((student) => student.firstname).join(', ')}`);
    }
  }
};
