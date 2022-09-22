require("./products_data.js");
var num_products = 5;
var number = 0;
while(number++ <= num_products/2){ //while the number is less than or equal to the number of products, output the following...
    console.log( `${number}. ${eval('name' + number)} `); //outputs name AND the product number
    //number++;
}
console.log(`That's all we have!`);