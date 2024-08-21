/**
 *
 */
const { error } = require('console');
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
	const lines = data.split('\n').filter(line => line.trim() !== '');
	console.log(`Number of students: ${lines.length - 1}`)
	const cs = []
	const swe = []
	for (let i = 0; i < lines.length; i++) {
      let fields = lines[i].split(',')
	  if (fields[3] == 'CS') {
        cs.push(fields[0])
	  }
	  if (fields[3] == 'SWE') {
        swe.push(fields[0])
	  }
	}
	console.log(`Number of students in CS: ${cs.length} List: ${cs.join(', ')}`);
	console.log(`Number of students in SWE: ${swe.length} List: ${swe.join(', ')}`);
  } catch (err) {
	throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
