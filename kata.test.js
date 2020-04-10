const greet = require('./kata');

// Req 1
test('Tests greet() with the name Bob', () =>{
    expect(greet('Bob')).toBe("Hello, Bob.");
});

// Req 2
test('Test null input of greet()', () =>{
    expect(greet(null)).toBe('Hello, my friend.');
});

// Req 3 
test('Test shouting', () =>{
    expect(greet('JERRY')).toBe('HELLO JERRY!');
});

// Req 4
test('Test handling of two names', () =>{
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
});

test('Test handling of two uppercase names', () =>{
    expect(greet(['JILL', 'JANE'])).toBe('HELLO, JILL AND JANE!');
});

// Req 5

test('Test handling of arbitrary number of names', () =>{
    expect(greet(['Jill', 'Jane', 'Amy', 'Brian'])).toBe(
        'Hello, Jill, Jane, Amy, and Brian.');
});

// Req 6
test('Test separate shouting greetings', () =>{
    expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
});

// TODO: Req 7

// TODO: Req 8