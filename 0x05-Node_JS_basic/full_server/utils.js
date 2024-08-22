const fs = require('fs').promises;

const readDatabase = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return { message: 'No students found' };
    }
    const result = {
      CS: [],
      SWE: [],
    };
    for (let i = 1; i < lines.length; i += 1) {
      const fields = lines[i].split(',');
      const firstName = fields[0];
      const field = fields[3];

      if (field === 'CS') {
        result.CS.push(firstName);
      } else if (field === 'SWE') {
        result.SWE.push(firstName);
      }
    }
    return result;
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    return { message: 'File is not accessible' };
  }
};

module.exports = readDatabase;
