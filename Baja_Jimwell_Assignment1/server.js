// Assignment 1 Server

//VARIABLE DEFINITIONS USING EXPRESS
var express = require("express");
var app = express();

// Import and assign product information from products_data
var products = require(__dirname + "/products.json");

//All product elements from array are 0
products.forEach((products, i) => {
	products.sold = 0;
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
	let input = request.body['quantity']; // assigning req body to var

	// Validate inputted quantities

	// validating quantities, and valid quantities
	let valid = true;
	let invalidblank = false;
	let validstock = true;
	let validquantity = false;
	let stock_quantity = true;
	let hell = false;
	let ordered = "";

	// monitor all requests
	app.all("*", function (request, response, next) {
		console.log(request.method + " to " + request.path);
		next();
	});

	for (let i in input) { // Iterate over all text boxes in the form.
		quantity = input[i];
		let item = products[i]['name'];
		if (quantity == 0) { // assigning no value to certain items to avoid errors in invoice.html
			ordered += item + "=" + quantity + "&";
		} else if (isNonNegInt(quantity) && Number(quantity) <= products[i].stock) { // if quantity is true, added to ordered string
			// We have a valid quantity. Add to the ordered string.
			products[i].stock -= Number(quantity);
			ordered += item + "=" + quantity + "&"; // appears in invoice.html's URL
		} else if (isNonNegInt(quantity) != true) { // quantity is "Not a Number, Negative Value, or not an Integer"
			valid = false;
		} else if (Number(quantity) >= products[i].stock) { // Existing stock is less than desired quantity
			validstock = false;
		} else { // textbox has gone missing? or some other error
			othererrors = true;
		}
	}

	if (input.join("") == 0) { // if the array customerquantities adds up to 0, that means there are no quantities typed in
		invalidblank = true;
	}

	// If we found an error, redirect back to the order page, if not, proceed to invoice

	if (invalidblank) { // if all boxes are blank, there is an error, pops up alert
		response.redirect('example_webpage.html?error=Invalid%20Quantity,%20No%20Quantities%20Selected!%20Please%20type%20in%20values!');
	} else if (!valid) { // quantity is "Not a Number, Negative Value, or not an Integer", pops up alert
		response.redirect('example_webpage.html?error=Invalid%20Quantity,%20Please%20Fix%20the%20Errors%20in%20Red%20on%20the%20Order%20Page!');
	} else if (!validstock) { // Existing stock is less than desired quantity, pops up alert
		response.redirect('example_webpage.html?error=Invalid%20Quantity,%20Requested%20Quantity%20Exceeds%20Stock');
	} else if (hell) { // textbox has gone missing? or some other error, pops up alert
		response.redirect('example_webpage.html?error=Invalid%20Quantity,%20Unknown%20Error%20has%20occured');
	} else {
		// If everything is good, redirect to the invoice page.
		response.redirect('invoice.html?' + ordered);
	};
});

// start server
app.listen(8080, () => console.log(`listening on port 8080`));