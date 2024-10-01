const http = require('http');
const fs = require('fs');

const PORT = 12451;
const HOST = 'localhost';
const app = http.createServer();

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
        console.log(res);
        resolve(res);
      }
    });
  });
}

const router = {
  '/': (req, res) => { res.write('Hello Holberton School!'); },
  '/students': (req, res) => {
    countStudents('database.csv')
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.end(String(error));
      });
  },
};

app.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (router[req.url]) {
    router[req.url](req, res);
  } else {
    res.statusCode = 404;
    res.end('Invalid request');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

module.exports = app;
