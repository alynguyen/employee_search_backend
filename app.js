const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

app.use('/', require('./routes'));

const port = 3001;
const host = '0.0.0.0';

app.listen(port, host);
