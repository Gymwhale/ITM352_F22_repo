// Assignment 1 Server

var express = require('express');
var app = express();

// Import and assign product information from products_data
var items_array = require("./products_data.js");

// Importing parser and querystring
var myParser = require("body-parser");
const queryString = require('querystring');

// Taken from lab 13
app.use(myParser.urlencoded({ extended: true })); 

// Validate whether or not inputs are valid
function isNonNegInt(n) {
    errors = []; // assume no errors at first
    if (Number(n) != n) errors.push('Not a number!'); // Check if string is a number value
    if (n < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(n) != n) errors.push('Not an integer!'); // Check that it is an integer
    if (errors.length == 0) {
      return true;
    }
    else {
      let message = errors.join("");
      return message
    }
  }

// Inputted quantities are less than stock
function checkstock(quantity_input, stock_quantity){
   if (quantity_input > stock_quantity){
      return false;
   }
}

// Routing 
app.use(myParser.urlencoded({extended : true}));
app.post("/purchase", function(request, response) {
   let POST = request.body; // assigning req body to var
   
   // Validate inputted quantities
   if (typeof POST['purchase_submit'] != 'undefined') { // validating quantities, and valid quantities
      var hasValidQuantities = true;
      var hasQuantities = false;
      var stock_quantity = true;

      // Check to see that valid quantities are in stock
      for (i = 0; i < items_array.length; i++){
      quantity = POST[`quantity${i}`];
      input_Quantities = quantity > 0;
      valid_Quantities = hasValidQuantities && isNonNegInt(quantity);
      stock_quantity = validatestock_quantity(quantity, items_array[i]['quantity_available']) && isNonNegInt(quantity);
      }

      // Make into queryString
      const stringified = queryString.stringify(POST); 

      if (hasQuantities && hasValidQuantities && stock_quantity) {
            response.redirect("./invoice.html?" + stringified); // Send to invoice page
      } else {
       response.redirect("./products_display.html?" + stringified); // Send back to store
      }
   }
   console.log(request.body);
})









// monitor all requests
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});


// route all other GET requests to files in public 
app.use(express.static(__dirname + '/public'));

// start server
app.listen(8080, () => console.log(`listening on port 8080`));