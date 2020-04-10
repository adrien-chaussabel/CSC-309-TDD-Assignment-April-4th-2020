s1 = ['test', 'foo']
s2 = ['Jack', 'Jill', 'FOO', 'Ted']

caps = ['FOO', 'Bar', 'BAZ']

console.log(s2.splice(1, 1));


function isUpper(str){
    return str === str.toUpperCase();
}

function isUpperForArray(names){
    return names.every(isUpper);
}

function join3PlusNames(names){
    return names.splice(0, names.length-1).join(', ') + `, and ${names.slice(-1)[0]}`;
}

function getShouts(names){
    shoutNames = ''
    mask = names.map(n => isUpper(n));
    shoutNames = names.filter((name, i) => mask[i]);
    return shoutNames 
}

console.log(
    getShouts(caps)
);