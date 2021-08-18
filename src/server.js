'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const notFoundHandler = require('../src/error-handlers/404');
const errorHandler = require('../src/error-handlers/500');
const looger = require('../src/middleware/logger');

const authRouter = require('../src/routes/routes');
const teamRout = require('../src/routes/v1');

const app =express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use(looger);

app.use('/api/v1',teamRout);
app.use(authRouter);

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = {   
    server: app,   
    start: (port) => {
        app.listen(port,() => {console.log(`run on port:-  ${port}`)}); 
    }, 
};
