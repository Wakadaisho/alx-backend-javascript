import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const file = process.argv[2];
    readDatabase(file)
      .then((data) => {
        let ret = 'This is the list of our students\n';
        const fields = Object.keys(data).sort(
          (a, b) => a.toLowerCase() < b.toLowerCase(),
        );
        fields.forEach((field) => {
          const count = data[field].length;
          const students = data[field].join(', ');
          ret += `Number of students in ${field}: ${count}. List: ${students}\n`;
        });
        response.send(ret.trim());
      })
      .catch((err) => {
        response.status(500);
        response.send(err);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const file = process.argv[2];

    readDatabase(file)
      .then((data) => {
        if (!(major in data)) {
          throw new Error('Major parameter must be CS or SWE');
        }
        const students = data[major].join(', ');
        const ret = `List: ${students}\n`;

        response.status(200).send(ret.trim());
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
}

export default StudentsController;
