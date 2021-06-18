//TODO: Initialize express
//TODO: Setup handlebars
//TODO: Setup the static files
//TODO: Setup the storage middleware
//TODO: Setup route handlers/controllers actions
const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const { init: storage } = require('./services/storage')

start();
 async function start() {
     const app = express();
     const port = 3000;
     expressConfig(app);
      await databaseConfig(app);
     app.use(await storage());//promyana pozicia
     routesConfig(app);
     


     app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));
 }

//  Module {
//     id: '.',
//     path: '/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me',
//     exports: {},
//     parent: null,
//     filename: '/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me/index.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me/node_modules',
//       '/Users/stanleynguyen/Documents/Projects/node_modules',
//       '/Users/stanleynguyen/Documents/node_modules',
//       '/Users/stanleynguyen/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }