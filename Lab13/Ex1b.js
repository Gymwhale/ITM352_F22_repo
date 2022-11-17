var users = require("./user_data.json");
console.log(users);
var fs = require('fs');

var file_name = "user_data.json";

var data = fs.readFileSync(file_name, 'utf-8');
var users_data = JSON.parse(data);
console.log(users_data["kazman"]['password']);  