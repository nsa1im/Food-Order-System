const {checkEmailExists} = require('./validate');

test('checkEmailExists: thisemail@usiu.ac.ke does not exist', () => {
    expect(checkEmailExists('thisemail@usiu.ac.ke')).toBe("Email doesn't exist!");
});
test('checkEmailExists: nsalim@usiu.ac.ke does exist', () => {
    expect(checkEmailExists('nsalim@usiu.ac.ke')).toBe("Email already exists!");
});      