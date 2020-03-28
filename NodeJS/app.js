const express = require('express');
const router = require('./routes');
const app = express();

app.use('/', router);
app.use(express.json());

const port = process.env.PORT ||3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));