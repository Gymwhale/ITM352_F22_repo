var fs = require('fs');
var filename = 'user_data.json';
if (fs.existsSync(filename)) {
    var data = fs.readFileSync(filename, 'utf-8');
    var users_data = JSON.parse(data);
    if (typeof users_data["kazman"] != 'undefined') {
        console.log(users_data["kazman"]["password"]);
    }
}
else {
    console.log(`${filename} file doesn't exist :(`);
}
