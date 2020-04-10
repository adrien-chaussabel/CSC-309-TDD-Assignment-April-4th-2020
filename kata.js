// The Greeting Kata

function greet(name){

    name = parseNames(name);

    nameLists = filterNamesByCase(name);

    if(nameLists[0].length == 0){
        //Only Lower
        return greetNormal(nameLists[1]);
    }
    else if(nameLists[1].length == 0){
        //Only uppers
        return greetShout(nameLists[0]);
    }
    //mixed case type
    return greetNormal(nameLists[1]) + ' AND ' + greetShout(nameLists[0]);
}

function greetNormal(name){
    return `Hello, ${joinNames(name)}.`
}

function greetShout(name){
    return `HELLO ${joinNames(name).toUpperCase()}!`
}

function joinNames(names){
    switch(names.length){
        case 1: return names[0];
        case 2: return names.join(' and ')
        default: return names.splice(0, names.length-1).join(', ') + `, and ${names.slice(-1)[0]}`;
    }
}

function filterNamesByCase(names){
    shoutNames = []
    normalNames = []
    shoutNames = names.filter(name => name === name.toUpperCase());
    normalNames = names.filter(name => !shoutNames.includes(name));
    return [shoutNames, normalNames];
}

function hasEscape(str){
    return str[0] == '\"' && str[str.length-1] == '\"'
}

function filterEscaped(names){
    return [names.filter(name => !hasEscape(name)),
            names.filter(name => hasEscape(name))];
}

function parseNames(names){
    if(names === null)
        names = 'my friend'
    names = Array.isArray(names) ? names : [names]
    filtList = filterEscaped(names);

    arr = []
    spl = filtList[0].map(name => name.split(', '))
    spl.map(nest => nest.map(e => arr.push(e)));
    filtList[1].every(e => arr.push(e.slice(1, e.length - 1)))
    return arr;
}



module.exports = greet;