const fs = require('fs');

let users = [
    {
        "name":"nsalim",
        "email":"nsalim@usiu.ac.ke",
        "password":123,
        "room": 216
    }
]

function checkEmailExists(email){
    newUsers = users.filter((user) => user.email === email);
    if(newUsers.length>0){
        return ("Email already exists!")
    }
    else{
        return ("Email doesn't exist!")
    }
}
function checkNameExists(name){
    newUsers = users.filter((user) => user.name === name);
    if(newUsers.length>0){
        return ("Name already exists!")
    }
    else{
        return ("Name doesn't exist!")
    }
}

module.exports = {checkEmailExists, checkNameExists};