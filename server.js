const express = require('express')

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3001;
app.use(express.static('public'));
app.use(express.json());
app.use(routes)
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log('now listening'))
