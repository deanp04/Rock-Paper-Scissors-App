const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)

app.get('/healthcheck', (req, res) => {
    res.send('Rock Paper Scissors App running...')
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})