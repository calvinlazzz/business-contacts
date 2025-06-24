const app = require('./app');

const {PORT = 3009} = process.env;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});