function isNonNegInt (SubmittedVal, returnErrors = false) {
    errors = []; // assume no errors at first
    if(Number(SubmittedVal) != SubmittedVal) errors.push('Not a number!'); // Check if string is a number value
    if(SubmittedVal < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(SubmittedVal) != SubmittedVal) errors.push('Not an integer!'); // Check that it is an integer
    
    if (returnErrors) {
        return errors;
    }
    else if (errors.length == 0) { //what function will do
        return true;
    }
    else {
        return false;
    }
}

attributes  =  "Jimwell;20;20.5;-19.5" ;
var pieces = attributes.split(';');
for (let part in pieces) {
    console.log(`${part} is type ${typeof part} ${isNonNegInt(pieces[part])}`)
}