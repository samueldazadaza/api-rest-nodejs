const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', 3000); //variable del puerto

// milddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //para que el server entienda valor de inputs en un formulario
app.use(express.json()); //para recibir formato json


//starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})