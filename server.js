const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const fs = require('fs');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const { v4: uuidv4 } = require('uuid');
const {checkNameExists, checkEmailExists, checkEmailUSIU, checkPassword, checkRoom} = require('./validate');

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (request, response) {
  response.render('home');
});

app.post('/overviewPage', urlEncodedParser, function (request, response) {
  const name = request.body.username;
  const email = request.body.email;
  const password = request.body.password;
  const room = parseInt(request.body.room);

  let verify_Name = checkNameExists(name);
  let verify_Email = checkEmailExists(email);
  let verify_USIU_Email = checkEmailUSIU(email);
  let verify_Password = checkPassword(password);
  let verify_Room = checkRoom(room);

  if(verify_Name==="Name already exists!"){
    response.render('home', {
      errorMessage: 'Username already exists!',
    });
  }
  else if(verify_Name==="Name doesn't exist!"){
    if(verify_Email==="Email already exists!"){
      response.render('home', {
        errorMessage: 'Email already exists!',
      });
    }
    else{
      if(verify_USIU_Email==="Invalid email!"){
        response.render('home', {
          errorMessage: 'Wrong email format!',
        });
      }
      else{
        if(verify_Password==="Wrong!"){
          response.render('home', {
            errorMessage: 'Password must be at least 8 characters long!',
          });
        }
        else{
          if(verify_Room==="Wrong!"){
            response.render('home', {
              errorMessage: 'No such room!',
            });
          }
          else{
            response.render('overviewPage');
          }
        }
      }
    }
  }
});

app.get('/overviewPage', urlEncodedParser, function (request, response) {
    response.render('overviewPage');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
