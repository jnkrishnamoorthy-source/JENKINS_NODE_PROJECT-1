const express = require('express');
const app = express();

app.get('/', (req, res) => {
//   res.send('Hello Students ');docker rm -f node-demo-container
  res.send('Updated Version');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});