//TODO: Initialize express
//TODO: Setup handlebars
//TODO: Setup the static files
//TODO: Setup the storage middleware
//TODO: Setup route handlers/controllers actions
const express = require('express');

const hbs = require('express-handlebars');
const { init: storage } = require('./models/storage')
const {about} = require('./controllers/about');
const { catalog }= require('./controllers/catalog');
const { getCreate, postCreate } = require('./controllers/create');
const {details} = require('./controllers/details');
const {notFound} = require('./controllers/notFound');
start();
 async function start() {
     const app = express();
     const port = 3000;

     app.engine('hbs', hbs({
         // partialsDir: './views',
         extname: '.hbs',
         defaultLayout: 'main'
     }));
     app.set('view engine', 'hbs');

     app.use('/static', express.static('static'));
     app.use(express.urlencoded({
        extended: false
    }));
     app.use(await storage());

     app.get('/', catalog);
     app.get('/about', about);
     app.get('/details/:id', details);
     app.get('/notFound', notFound);
     app.get('/create', getCreate);
     app.post('/create', postCreate);

     app.all('*', notFound)
     app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));
 }

