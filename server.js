const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/paymentology-xianming-poc'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/angular-heroku/'})
});

app.listen(process.env.PORT || 8084);