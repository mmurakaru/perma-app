const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const fetch = require('node-fetch')

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// The parameters for our POST request
const params = {
  origin: 'http://localhost:3000',
  token: '5slwOv-vNendNI-A4LtwJJiM0KHc_t-nTx4zxp88yMI'
}

fetch('https://trefle.io/api/auth/claim', {
  method: 'post',
  body: JSON.stringify(params),
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))