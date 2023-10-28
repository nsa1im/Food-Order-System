const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const fs = require('fs');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const { v4: uuidv4 } = require('uuid');

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (request, response) {
  response.render('home');
});

app.post('/overviewPage', urlEncodedParser, function (request, response) {
  const name = request.body.name;
  const email = request.body.email;
  const password = request.body.password;
  const room = parseInt(request.body.room);

  if(name && email && password && room){
    const user = {
      name: name,
      email: email,
      password: password,
      room: room
    };
    //check if exists into database
    //save the details into the database

    response.render('overviewPage', user);

  } else {
    response.render('home', {
      errorMessage: 'Details not entered!',
    });
  }
});

app.get('/overviewPage', urlEncodedParser, function (request, response) {
  const email = request.body.email;
  const password = request.body.password;

  if(email && password){
    const user = {
      email: email,
      password: password,
    };
    //check if exists in database
    
    response.render('overviewPage', user);

  } else {
    response.render('home', {
      errorMessage: 'Details not entered!',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});