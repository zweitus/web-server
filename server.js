var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; // constant var # convention
var middleware = require('./middleware');

// app.use(middleware.requireAuthentication); 
app.use(middleware.logger); 


// app.get('/', function (req, res) { //request, response 
// 	res.send('Hello Express!');
// });

// about 
// About us

app.get('/about', middleware.requireAuthentication,  function (req, res) {
	res.send('About Us!');
});


app.use(express.static(__dirname + '/public'));
// console.log(__dirname); // find the current dir name




app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!')
}); 