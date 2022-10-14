function isNonNegInt (n, returnErrors = false) {
    errors = []; // assume no errors at first
    if(Number(n) != n) errors.push('Not a number!'); // Check if string is a number value
    if(n < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(n) != n) errors.push('Not an integer!'); // Check that it is an integer
    if(errors.length == 0)
    {
        return true;
    }
    else{
        let message = errors.join("");
        return message
    }
}

attributes  =  "Jimwell;20;20.5;-19.5" ;
var pieces = attributes.split(';');
for (i in pieces) {
    pieces[i] = `${typeof pieces[i]} ${pieces[i]}`;
}
console.log(pieces.join(','));

function checkIt (item, index){
    pieces.forEach((item,index)=>{
        console.log(`part ${index} is ${(isNonNegativeInteger(item)?'a':'not a')} quantity`);});
};