const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const server = express() 

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const PORT = 3000

const createPath = (page) => path.resolve(__dirname, 'front', `${page}`)

server.use(express.static('./front/styles'))

server.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

server.get('/script.js', (res, req) => {
    req.setHeader('Content-Type', 'application/javascript')
    req.sendFile(createPath('script.js'))
})

server.get('/',(req, res) => {
    res.sendFile(createPath('index.html'))
})


server.post('/api/password',(req, res) => {
    
    if(req.body.pas == '1231234'){
        res.json({"ok": true, 'value' : 'молодец, тебе на /audio'})
    }
    else{
        res.json({"messange": "Бро, тебе надо тренироваться. Правильный пароль это 1231234"})
    }
    
})

server.get('/audio', (req, res) => {
    res.sendFile(__dirname+'/final.mp3')
})


