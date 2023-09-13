const express = require('express');
const app = express();
const wiki = require('./routes/wiki');
const port = 3000;

app.use(wiki);

// const index = require('./routes/index');
// app.use(index);







app.listen(port, () => {
  console.log(`Server is listenning at http://localhost:${port}....`);
});