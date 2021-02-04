const express = require('express');
const app = express();

app.use(express.json());

app.use('/', require('./routes'));

const port = 3001;
const host = '0.0.0.0';

app.listen(port, host);
