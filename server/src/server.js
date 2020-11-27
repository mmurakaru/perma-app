const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors")
const fetch = require('node-fetch');
const myLogger = require('./middleware/myLogger')

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())

app.use(myLogger())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});




// // The parameters for our POST request
// const params = {
//   origin: 'http://localhost:3001/',
//   token: '5slwOv-vNendNI-A4LtwJJiM0KHc_t-nTx4zxp88yMI'
// }

// (async () => {
//   const response = await fetch(
//     'https://trefle.io/api/auth/claim', {
//       method: 'post',
//       body: JSON.stringify(params),
//       headers: { 'Content-Type': 'application/json' }
//     });
//   const json = await response.json();
//   console.log(json);
// })();