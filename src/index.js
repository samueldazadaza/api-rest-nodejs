const express = require('express');
const app = express();
const morgan = require('morgan');

// milddlewares
app.use(morgan('dev'));
app.use(morgan('combined'));

//starting the server
app.listen(3000, () => {
    console.log(`server on port ${3000} in live`)
})