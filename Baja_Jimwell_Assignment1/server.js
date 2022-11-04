// Assignment 1 Server

//VARIABLE DEFINITIONS USING EXPRESS
var express = require("express");
var app = express();

// Import and assign product information from products_data
var products = require(__dirname + "/products.json");

//All product elements from array are 0
products.forEach((products, i) => {
	products.stock = 0;
});

// Importing parser and querystring
var myParser = require("body-parser");
const QueryString = require("querystring");

// route all other GET requests to files in public
app.use(express.static(__dirname + "/public"));

// Validate whether or not inputs are valid
function isNonNegInt(n) {
	errors = []; // assume no errors at first
	if (Number(n) != n) errors.push("Not a number!"); // Check if string is a number value
	if (n < 0) errors.push("Negative value!"); // Check if it is non-negative
	if (parseInt(n) != n) errors.push("Not an integer!"); // Check that it is an integer
	if (errors.length == 0) {
		return true;
	} else {
		let message = errors.join("");
		return message;
	}
}

// Inputted quantities are less than stock
function validatestock_quantity(quantity_input, stock_quantity) {
	if (quantity_input > stock_quantity) {
		return false;
	}
}

//products_data is sent as a string
app.get("/products.json", function (request, response, next) {
	response.type(".json");
	var products_str = `var products = ${JSON.stringify(products)};`;
	response.send(products_str);
});

// Inputted quantities are less than stock
function checkstock(quantity_input, stock_quantity) {
	if (quantity_input > stock_quantity) {
		return false;
	}
}

// Routing
app.use(myParser.urlencoded({ extended: true }));
app.post("/purchase", function (request, response) {
	let input = request.body; // assigning req body to var

	// Validate inputted quantities

	// validating quantities, and valid quantities
   let valid = true;
   let invalidblank = false;
	let hasvalidstock = true;
	let hasQuantities = false;
	let stock_quantity = true;

	// Check to see that valid quantities are in stock
	for (i = 0; i < products.length; i++) {
		quantity = input[`quantity${i}`];
		input_Quantities = quantity > 0;
		valid_Quantities = hasvalidstock && isNonNegInt(quantity);
		stock_quantity =
			validatestock_quantity(quantity, products[i]["stock"]) &&
			isNonNegInt(quantity);
	}

	if (hasQuantities && hasvalidstock && stock_quantity) {
		response.redirect("../invoice.html?" + stringified); // Send to invoice page
	} else {
		response.redirect("./example_webpage.html?" + stringified); // Send back to store
	}

	console.log(request.body);
});

// monitor all requests
app.all("*", function (request, response, next) {
	console.log(request.method + " to " + request.path);
	next();
});

let customerquantities = request.body[`quantitytextbox`];

for (let i in customerquantities) { // Iterate over all text boxes in the form.
    qtys = customerquantities[i];
    let model = products[i]['name'];
    if (qtys == 0) { // assigning no value to certain models to avoid errors in invoice.html
        ordered += model + "=" + qtys + "&";
    } else if (isNonNegativeInteger(qtys) && Number(qtys) <= products[i].quantity_available) { // if qtys is true, added to ordered string
            // We have a valid quantity. Add to the ordered string.
            products[i].quantity_available -= Number(qtys);
            ordered += model + "=" + qtys + "&"; // appears in invoice.html's URL
    } else if (isNonNegativeInteger(qtys) != true) { // quantity is "Not a Number, Negative Value, or not an Integer"
        validinput = false;
    } else if (Number(qtys) >= products[i].quantity_available) { // Existing stock is less than desired quantity
        instock = false;
    } else { // textbox has gone missing? or some other error
        othererrors = true;
    }
}

if (customerquantities.join("") == 0) { // if the array customerquantities adds up to 0, that means there are no quantities typed in
    allblank = true;
}

// If we found an error, redirect back to the order page, if not, proceed to invoice

if (allblank) { // if all boxes are blank, there is an error, pops up alert
    response.redirect('products_display.html?error=Invalid%20Quantity,%20No%20Quantities%20Selected!%20Please%20type%20in%20values!');
} else if (!validinput ){ // quantity is "Not a Number, Negative Value, or not an Integer", pops up alert
    response.redirect('products_display.html?error=Invalid%20Quantity,%20Please%20Fix%20the%20Errors%20in%20Red%20on%20the%20Order%20Page!');
} else if (!instock ){ // Existing stock is less than desired quantity, pops up alert
    response.redirect('products_display.html?error=Invalid%20Quantity,%20Requested%20Quantity%20Exceeds%20Stock');
} else if (othererrors) { // textbox has gone missing? or some other error, pops up alert
    response.redirect('products_display.html?error=Invalid%20Quantity,%20Unknown%20Error%20has%20occured');
} else {
    // If everything is good, redirect to the invoice page.
    response.redirect('invoice.html?' + ordered);
};


// start server
app.listen(8080, () => console.log(`listening on port 8080`));