const {checkNameExists, checkEmailExists, checkEmailUSIU} = require('./validate');     

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
