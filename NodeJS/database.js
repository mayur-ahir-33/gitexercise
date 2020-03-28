const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exercise')
.then(()=> console.log('Connection Established...'))
.catch(err => console.error('Could not connect to database...', err));

module.exports = mongoose;