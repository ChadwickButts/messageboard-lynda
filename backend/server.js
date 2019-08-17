var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/messages', (req,res) => {
    
    var messages = [
        {text: 'some text', owner: 'Tim'},
        {text: 'other message', owner: 'Jane'}
    ];

    res.json(messages);
});

app.listen(1234);