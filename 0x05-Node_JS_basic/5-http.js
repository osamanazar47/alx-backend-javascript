const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOST = '127.0.0.1';

const app = http.createServer()
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */

const SERVER_ROUTE_HANDLERS = [
	{
	  route: '/',
	  handler(_, res) {
		const responseText = 'Hello Holberton School!';
  
		res.setHeader('Content-Type', 'text/plain');
		res.setHeader('Content-Length', responseText.length);
		res.statusCode = 200;
		res.write(Buffer.from(responseText));
	  },
	},
	{
	  route: '/students',
	  handler(_, res) {
		const responseParts = ['This is the list of our students'];
  
		countStudents(DB_FILE)
		  .then((report) => {
			responseParts.push(report);
			const responseText = responseParts.join('\n');
			res.setHeader('Content-Type', 'text/plain');
			res.setHeader('Content-Length', responseText.length);
			res.statusCode = 200;
			res.write(Buffer.from(responseText));
		  })
		  .catch((err) => {
			responseParts.push(err instanceof Error ? err.message : err.toString());
			const responseText = responseParts.join('\n');
			res.setHeader('Content-Type', 'text/plain');
			res.setHeader('Content-Length', responseText.length);
			res.statusCode = 200;
			res.write(Buffer.from(responseText));
		  });
	  },
	},
  ];
  
  app.on('request', (req, res) => {
	for (const routeHandler of SERVER_ROUTE_HANDLERS) {
	  if (routeHandler.route === req.url) {
		routeHandler.handler(req, res);
		break;
	  }
	}
  });
  
  app.listen(PORT, HOST, () => {
	process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
  });
  
  module.exports = app;
  