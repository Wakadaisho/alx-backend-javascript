// Counts the number of student records in a csv file
const fs = require('fs');

function countStudents(path) {
  function findIndex(line, field, separator = ',') {
    return line.split(separator).findIndex((i) => i === field);
  }
  try {
    const file = fs.readFileSync(path, 'utf-8');
    let lines = file.split('\n');
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

    const fields = Object.keys(stats);
    console.log('Number of students: ', total);
    fields.forEach((field) => {
      const count = stats[field].length;
      const students = stats[field].join(', ');
      console.log(
        `Number of students in ${field}: ${count}. List: ${students}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
