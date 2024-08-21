const fs = require('fs').promises;

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} path The path to the CSV data file.
 */
const countStudents = async (path) => {
  try {
    // Read file asynchronously and wait for it to complete
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

    if (lines.length <= 1) {
      console.log('No students found');
      return; // Returning from async function, the promise resolves with `undefined`
    }

    console.log(`Number of students: ${lines.length - 1}`);

    const cs = [];
    const swe = [];

    for (let i = 1; i < lines.length; i += 1) { // Start from 1 to skip the header
      const fields = lines[i].split(',');
      if (fields[3] === 'CS') {
        cs.push(fields[0]);
      } else if (fields[3] === 'SWE') {
        swe.push(fields[0]);
      }
    }

    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (err) {
    console.error('Cannot load the database'); // Handles errors, promise rejects with this error
  }
};

module.exports = countStudents;
