// The Greeting Kata

function greet(name){
    if(name === null)
        name = 'my friend'
    else if(!Array.isArray(name)){
        // One name
        upperBool = isUpper(name);
    }
    else{
        // More than one name
        
        shouts = getShouts();
        upperBool = isUpperForArray(name);
        // only 2 names
        if(name.length == 2)
            name = name.join(' and ');
        // 3+ names
        else
            name = join3PlusNames(name);
    }
    greetString = `Hello, ${name}`;
    return upperBool ? greetString.replace(',', '').toUpperCase() + '!' : greetString + '.'; 
}

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
    return shoutNames;
}



module.exports = greet;