const express = require('express');
const index = require('./routes/index');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended : true}) );


app.use('/', index.main);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
