const {checkNameExists, checkEmailExists, checkEmailUSIU, checkPassword, checkRoom, calculatePrice} = require('./validate');     

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

test('checkRoom: 99 is not a valid room', () => {
    expect(checkRoom(99)).toBe("Wrong!");
});
test('checkRoom: 999 is not a valid room', () => {
    expect(checkRoom(999)).toBe("Wrong!");
});
test('checkRoom: 801 is a valid room', () => {
    expect(checkRoom(801)).toBe("Right!");
});
test('checkRoom: 8010 is not a valid room', () => {
    expect(checkRoom(8010)).toBe("Wrong!");
});

test('calculatePrice: Kshs. 100 by 3 items', () => {
    expect(calculatePrice(100, 3)).toBe(300);
});
test('calculatePrice: Kshs. -10 by 10 items', () => {
    expect(calculatePrice(-10, 10)).toBe("Invalid price!");
});
test('calculatePrice: Kshs. 0 by 10 items', () => {
    expect(calculatePrice(0, 10)).toBe("Invalid price!");
});
test('calculatePrice: Kshs. 1000000 by 10 items', () => {
    expect(calculatePrice(1000000, 10)).toBe("Invalid price!");
});
test('calculatePrice: Kshs. 1400 by 0 items', () => {
    expect(calculatePrice(1400, 0)).toBe(0);
});
test('calculatePrice: Kshs. 250 by -1 items', () => {
    expect(calculatePrice(250, -1)).toBe("Invalid number of items!");
});
test('calculatePrice: Kshs. 450 by 15 items', () => {
    expect(calculatePrice(450, 15)).toBe("Invalid number of items!");
});
