var fs = require('fs'); //filesync variable

var filename = __dirname + '/user_data.json'; //loads user data
// var users_reg_data = require(filename);
var data =  fs.readFileSync(filename, 'utf-8'); //creates data variable which is a function to read user data
var users_reg_data = JSON.parse(data); //parses data variable

console.log(users_reg_data["kazman"]['password']); //outputs kazmans login password into console