//Import the mongoose module
const mongoose = require('mongoose');

module.exports = (app) => {
  //we do not async/await here, but return just a promise  
return new Promise((resolve, reject) => {

//Set up default mongoose connection
const mongoDbPathToCubicle = 'mongodb://localhost:27017/cubicle';
mongoose.connect(mongoDbPathToCubicle, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', err => {
   console.error('Database error: ', err.message)
   reject(err.message);
})
db.once('open', () => {
  console.log('Database got connected!');
  resolve();
 });


})
    

}