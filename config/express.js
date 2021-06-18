const express = require('express');
const hbs = require('express-handlebars');

module.exports = (app) => {

    app.engine('hbs', hbs({
        // partialsDir: './views',
        extname: '.hbs',
        defaultLayout: 'main'
    }));
    app.set('view engine', 'hbs');

    app.use('/static', express.static('static'));
    app.use('/js', express.static('js'));
    app.use(express.urlencoded({
        extended: false
    }));




} //модифицираме апп, който е дошъл отвънка