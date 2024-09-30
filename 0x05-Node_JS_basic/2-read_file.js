const fs = require('fs');

module.exports = function read(database) {
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      const lines = data.split('\n').slice(1, -1);

      console.log(`Number of students: ${lines.length}`);
      const fields = {};

      for (const line of lines) {
        const stud = line.split(',');
        if (stud.length === 4) {
          if (!fields[stud[3]]) fields[stud[3]] = [];
          fields[stud[3]].push(stud[0]);
        }
      }

      for (const field in fields) {
        if (fields[field]) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    }
  });
};
