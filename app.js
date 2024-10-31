const express = require('express')
const app = express()
const path = require('path');
const host = "http://127.0.0.1"
const port = 3002
const postController = require('./controllers/postController');

app.get('/', (req, res) => {
  res.send("<h1>Benvenuto nel mio blog!</h1>")
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'prova', 'index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})

app.get('/posts', postController.index);

app.use(express.static('public'));

console.log("hi");

  