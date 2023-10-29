const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const fs = require('fs');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const { v4: uuidv4 } = require('uuid');
const {checkEmailExists} = require('./validate');

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

  let verify_Email = checkEmailExists(email);
  if (verify_Email==="Email already exists!"){
    response.render('home', {
      errorMessage: 'Email aready exists.',
    });
  }
  else if (verify_Email==="Email doesn't exist!"){
    response.render('overviewPage');
  }
  //check if name exists
  //check if email is USIU email
  //check if password is 8 characters
  //check if room is valid
});

app.get('/overviewPage', urlEncodedParser, function (request, response) {
    response.render('overviewPage');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
