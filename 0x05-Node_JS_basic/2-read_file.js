const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    if (!data) {
      console.log('Cannot load the database');
      return;
    }
    const lines = data.split('\n');
    lines.shift(); // Remove the header line

    const students = {};

    lines.forEach((line) => {
      if (line.trim() !== '') {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    });

    let output = '';
    const fields = Object.keys(students);
    fields.forEach((field) => {
      output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
    });

    return output;

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
