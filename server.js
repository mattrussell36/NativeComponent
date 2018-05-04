const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

// app.use('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.listen(8080, function () {
    console.log('Listening on 8080');
});
