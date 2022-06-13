const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/paymentology-frontend'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/paymentology-frontend/'})
});

app.listen(process.env.PORT || 8084);