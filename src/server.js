const express = require('express');
const api = express();

const routes = require('./routes.js');

api.use(express.json());
api.use(routes);

api.listen(3001, () => {
    console.log("Servidor is running at port 3001")
});