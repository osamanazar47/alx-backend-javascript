import readDatabase from "../utils";

class StudentsController {
  static async getAllStudents (request, response) {
    try {
      const data = await readDatabase('database.csv');
      if (!data || data.message) {
        return response.status(500).send('Cannot load the database');
      }

	  const { CS, SWE } = data;
	  let restext = 'This is the list of our students\n';

	  const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base'}));
	  fields.forEach((field) => {
        const names = data[field]
		restext += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
	  });

	  response.status(200).send(restext)
	} catch (err) {
      response.status(500).send('Cannot load the database');
	}
  }

  static async getAllStudentsByMajor (request, response) {
    const major = request.query.major;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
	}
    try {
      const data = await readDatabase('database.csv');
      if (!data || data.message) {
        return response.status(500).send('Cannot load the database');
	  }
	  const names = data[major];
	  if (!names) {
        return response.status(500).send('Major parameter must be CS or SWE');
	  }
      const responseText = `List: ${names.join(', ')}`;
      response.status(200).send(responseText);
	} catch (err) {
      response.status(500).send('Cannot load the database');
	}
  }
}

module.exports = getAllStudents;
