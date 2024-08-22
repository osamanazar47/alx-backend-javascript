const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return 'No students found';
    }

    const cs = [];
    const swe = [];

    for (let i = 1; i < lines.length; i += 1) {
      const fields = lines[i].split(',');
      if (fields[3] === 'CS') {
        cs.push(fields[0]);
      } else if (fields[3] === 'SWE') {
        swe.push(fields[0]);
      }
    }

    const response = [
      `Number of students: ${lines.length - 1}`,
      `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`,
      `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`,
    ].join('\n');

    return response;
  } catch (err) {
    return 'Cannot load the database';
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const studentsData = await countStudents(process.argv[2]);
  res.send(`This is the list of our students\n${studentsData}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
