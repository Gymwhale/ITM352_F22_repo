var attributes  =  "Jimwell;20;Finance";
console.log(attributes.split(';', 2))

var attributes  =  "Kaylin; 21; MIS";
var pieces = attributes.split(";"); //splits at the semicolon
console.log(pieces);

for (i=0; i<pieces.length; i++); /* {
// console.log(pieces[i]) will go through the pieces array and print each element of the array
   console.log(`i=$1{i} value = ${pieces[i]} type=${typeof pieces[i]}`)
    } */