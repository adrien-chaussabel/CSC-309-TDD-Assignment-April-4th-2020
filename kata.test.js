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
test('Split multiple names passed in as a single name', () =>{
    expect(greet(['Bob', 'Charlie, Dianne'])).toBe('Hello, Bob, Charlie, and Dianne.')
});

// TODO: Req 8
test('Test escaped commas', () =>{
    expect(greet(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.")
});
