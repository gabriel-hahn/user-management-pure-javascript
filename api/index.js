const express = require('express');
const consign = require('consign');

let app = express();

//App into all the routes.
consign().include('routes').into(app);

app.listen(3000, '127.0.0.1', () => {
    console.log('Servidor funcionando!');
});