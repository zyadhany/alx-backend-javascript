const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        let res = '';

        const lines = data.split('\n').slice(1, -1);
        res += `Number of students: ${lines.length}\n`;

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
            res += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }
        resolve(res);
      }
    });
  });
}

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(DB_FILE)
    .then((data) => {
      res.end(data);
    })
    .catch((err) => {
      const responseText = err instanceof Error ? err.message : err.toString();
      res.end(responseText);
    });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

module.exports = app;
