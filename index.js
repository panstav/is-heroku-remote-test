const express = require('express');

const isHeroku = require('@panstav/is-heroku');

const server = express();

server.get('/', (req, res) => res.json({ result: isHeroku() }));

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});