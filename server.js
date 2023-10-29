const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const fs = require('fs');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const { v4: uuidv4 } = require('uuid');
const {checkEmailNotExists} = require('./validate');

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
  const user = {
    name: name,
    email: email,
    password: password,
    room: room
  };
  let verify_Email = checkEmailNotExists(email);
  if (verify_Email==="Email already exists!"){
    response.render('home', {
      errorMessage: 'Email aready exists.',
    });
  }
  else if (verify_Email==="Email doesn't exist!"){
    response.render('overviewPage');
  }
  //check if email is USIU email
  //check if password is 8 characters
  //check if room is valid
});

function saveUser(event) {
  fs.readFile('users.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      let userDetails = [];
      if (data) {
        userDetails = JSON.parse(data);
      }
      event.id = uuidv4();
      userDetails.push(event);
      const json = JSON.stringify(userDetails, null, 2);
      fs.writeFile('users.json', json, 'utf8', function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('User details saved.');
        }
      });
    }
  });
}

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
