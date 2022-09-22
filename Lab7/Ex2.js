require("./products_data.js");
var num_products = 5;
var number = 0;
while(number++ < num_products){
    console.log(`number`);
    if(number > num_products*.75 || number < num_products*.25) {
    console.log(`${eval(`name`+number)} Is Sold Out!`);
    continue;
    }
}