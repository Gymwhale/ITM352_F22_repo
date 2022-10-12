//change amt
quarters = 25;
dime = 10;
nickel = 5;
penny = 1;

//change value
change = 69;

//quarters
Qreturn = parseInt(change/quarters);
remainder = change%quarters;
//dime
Dreturn = parseInt(remainder/dime);
remainder = change%dime;
//nickel
Nreturn = parseInt(remainder/nickel);
Preturn = Math.floor(change%5);

//output
console.log(`Change is = `, change);
console.log(`Quarters is = `, Qreturn);
console.log(`Dimes is = `, Dreturn);
console.log(`Nickels is = `, Nreturn);
console.log(`Pennies is = `, Preturn);