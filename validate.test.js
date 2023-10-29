const {checkEmailExists, checkNameExists} = require('./validate');

test('checkEmailExists: thisemail@usiu.ac.ke does not exist', () => {
    expect(checkEmailExists('thisemail@usiu.ac.ke')).toBe("Email doesn't exist!");
});
test('checkEmailExists: nsalim@usiu.ac.ke does exist', () => {
    expect(checkEmailExists('nsalim@usiu.ac.ke')).toBe("Email already exists!");
});      

test('checkNameExists: eadwera does not exist', () => {
    expect(checkNameExists('eadwera')).toBe("Name doesn't exist!");
});
test('checkNameExists: nsalim does exist', () => {
    expect(checkNameExists('nsalim')).toBe("Name already exists!");
});