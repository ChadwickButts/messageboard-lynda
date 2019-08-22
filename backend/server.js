var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var messages = [
    { text: 'some text', owner: 'Tim' },
    { text: 'other message', owner: 'Jane' }
];



app.use(bodyParser.json());


app.use(cors());
var api = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
});

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);
    res.json(result);
});

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
});

app.use("/api", api);

app.listen(63145);