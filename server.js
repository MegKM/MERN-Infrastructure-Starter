const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database.cjs');
   
const app = express();
   
//middleware
app.use(logger('dev'));
app.use(express.json());

//create-react-app has 'build'. vite has 'dist.
// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('./config/checkToken'));

const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on http://localhost/:${port}`)
});


// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));


// All unrecognised requests get rerouted to the home page
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});