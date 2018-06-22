const express = require('express');
const url = require('url');

const app = express();

const runningGames = {
    'abc123': 'This is game abc123'
};

app.use(express.static('dist'));

app.get('/api/game/join', joinGame);
function joinGame(req, res) {
    var id = req.query.id;
    res.send(runningGames[id]);
}

app.get('/api/game/create', createGame);
function createGame(req, res) {
    var id = Math.floor((Math.random()*9000) + 1000);
    runningGames[id.toString()] = 'This is game '+id;
    res.send('Game created ID: ' + id);
}

app.listen(8080, () => console.log('Listening on port 8080!'));
