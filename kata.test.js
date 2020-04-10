const greet = require('./kata');

test('Tests greet() with the name Bob', () =>{
    expect(greet('Bob')).toBe("Hello, Bob");
});