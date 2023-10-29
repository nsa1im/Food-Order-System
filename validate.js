function checkEmailNotExists(email){
    fs.readFile('users.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            response.status(500).send({ error: 'Internal server error' });
        } 
        else {
            let users = JSON.parse(data);
            users = users.filter((user) => user.email !== email);
            const json = JSON.stringify(users, null, 2);
            if(json.length >= 0){
                return "Email already exists!"
            }
            else{
                return "Email doesn't exist!"
            }
        }
    })
}
module.exports = {checkEmailNotExists};
