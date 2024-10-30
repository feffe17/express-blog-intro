const express = require('express')
const app = express()
const host = "127.0.0.1"
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})