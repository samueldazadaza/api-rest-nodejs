const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000); //variable del servidor heroku o variable del puerto local
app.set('json spaces', 2);

//routes
app.use(require('./routes/index'));

// milddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //para que el server entienda valor de inputs en un formulario
app.use(express.json()); //para recibir formato json

//starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})