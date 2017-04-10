var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){

	if(req.headers['x-forwarded-proto'] ==='https'){ //verifica se o protocolo é http
		res.redirect('http://'+req.hostname + req.url);
	}
	else{//se o protocolo é https, redireciona para http
		next();
	}
});

app.use(express.static('public'));
 
app.listen(PORT, function () {
  console.log('Express server is up on port '+ PORT);
});
