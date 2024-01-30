const fs = require('fs');

function readDatabase(path) {
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
        return newStat;
      }, {});
      resolve(stats);
    });
  });
}

export default readDatabase;
