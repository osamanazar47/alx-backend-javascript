import express from 'express';
import mapRoutes from './routes';

const app = express();
const port = 1245;

// the routes defined in full_server/routes/index.js
mapRoutes(app);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
module.exports = app;
