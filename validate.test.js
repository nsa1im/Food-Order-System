const {checkNameExists, checkEmailExists, checkEmailUSIU, checkPassword} = require('./validate');     

test('checkNameExists: eadwera does not exist', () => {
    expect(checkNameExists('eadwera')).toBe("Name doesn't exist!");
});
test('checkNameExists: nsalim does exist', () => {
    expect(checkNameExists('nsalim')).toBe("Name already exists!");
});  

test('checkEmailExists: thisemail@usiu.ac.ke does not exist', () => {
    expect(checkEmailExists('thisemail@usiu.ac.ke')).toBe("Email doesn't exist!");
});
test('checkEmailExists: nsalim@usiu.ac.ke does exist', () => {
    expect(checkEmailExists('nsalim@usiu.ac.ke')).toBe("Email already exists!");
}); 

test('checkEmailUSIU: nsalim@usiu.ac.ke is the right format', () => {
    expect(checkEmailUSIU('nsalim@usiu.ac.ke')).toBe("Valid email!");
});
test('checkEmailUSIU: nsalim@google.com is the wrong format', () => {
    expect(checkEmailUSIU('nsalim@google.com')).toBe("Invalid email!");
}); 

test('checkPassword: 1234 is less than 8 characters long', () => {
    expect(checkPassword('1234')).toBe("Wrong!");
});
test('checkPassword: 12345678 is 8 characters long', () => {
    expect(checkPassword('12345678')).toBe("Right!");
}); 
test('checkPassword: 123456789 is more than 8 characters long', () => {
    expect(checkPassword('123456789')).toBe("Right!");
});
