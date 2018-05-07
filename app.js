
    const express = require('express');
    const bodyParser = require('body-parser');
    const expbs = require('express-handlebars');
    const nodemailer = require('nodemailer');

    const app = express();

    app.get('/',(req,res) => {
        res.send('Hello');


    });
    app.listen(5500,()=> console.log('Server started!'));