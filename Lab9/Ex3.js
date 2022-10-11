var attributes  =  "Jimwell;20;20.5;-19.5" ;
var pieces = attributes.split(';');
console.log (pieces);

for (i=0; i<pieces.length; i++); 

/*
for (let part in pieces) {
    console.log(`${part} is type ${typeof part}`)
} */

console.log (typeof attributes);
console.log (typeof pieces);
console.log(pieces.join(`,`));