function isNonNegInt (q) {
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return errors;
}

attributes  =  "Jimwell;20;20.5;-19.5" ;
var pieces = attributes.split(';');
for (let part in pieces) {
    console.log(`${part} is type ${typeof part} ${isNonNegInt(pieces[part])}`)
}