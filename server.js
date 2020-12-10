const express = require("express")
const cors = require("cors")
const fetch = require('node-fetch')

const app = express();
const port = process.env.PORT || 3001;
const apiKey = process.env.API_KEY;

app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.get('/api/token', async (req, res) => {
  const token = await getJWT()
  res.send(token)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// The parameters for our POST request
function getJWT() {
const params = {
  origin: 'http://localhost:3000',
  token: apiKey
}

return fetch('https://trefle.io/api/auth/claim', {
  method: 'post',
  body: JSON.stringify(params),
  headers: { 'Content-Type': 'application/json' }
})
  .then( response => response.json())
  .then(data => data)
  .catch(err => console.log(err))
}

