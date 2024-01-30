// Small server using express module
// Counts the number of student records in a csv file
const fs = require('fs');

// Small server using express module
const express = require('express');

const app = express();

async function countStudents(path) {
  function findIndex(line, field, separator = ',') {
    return line.split(separator).findIndex((i) => i === field);
  }

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      let lines = data.split('\n');
      const fieldIndex = findIndex(lines[0], 'field');
      const nameIndex = findIndex(lines[0], 'firstname');
      let total = 0;

      lines = lines.slice(1);

      const stats = lines.reduce((acc, curr) => {
        if (curr.length === 0) return acc;
        let newStat = Object.assign(acc, {});
        const line = curr.split(',');
        const field = line[fieldIndex];
        const name = line[nameIndex];

        if (!(field in newStat)) {
          newStat = Object.assign(newStat, { [field]: [] });
        }
        newStat = Object.assign(newStat, { [field]: [...newStat[field], name] });
        total += 1;
        return newStat;
      }, {});
      let response = '';
      const fields = Object.keys(stats);
      response += `Number of students: ${total}\n`;
      fields.forEach((field) => {
        const count = stats[field].length;
        const students = stats[field].join(', ');
        response += `Number of students in ${field}: ${count}. List: ${students}\n`;
      });
      response = response.trim();
      resolve(response);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let response = 'This is the list of our students\n';
  response += await countStudents(process.argv[2])
    .then((data) => data)
    .catch((err) => {
      console.error(err);
      response = err;
    });
  res.send(response);
});

app.listen(1245);

module.exports = app;
