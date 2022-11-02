var express = require('express');
var app = express();

// Routing 

// monitor all requests
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

// process purchase request (validate quantities, check quantity available)
for (i = 0; i < items_array.length; i++){
    quantity = POST[`quantity${i}`];
    input_Quantities = quantity > 0;
    valid_Quantities = hasValidQuantities && isNonNegInt(quantity);
    stock_quantity = validatestock_quantity(quantity, items_array[i]['quantity_available']) && isNonNegInt(quantity);
    }

// route all other GET requests to files in public 
app.use(express.static(__dirname + '/public'));

// start server
app.listen(8080, () => console.log(`listening on port 8080`));