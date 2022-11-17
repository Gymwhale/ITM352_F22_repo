var fs = require('fs');
var filename = 'user_data.json';
if (fs.existsSync(filename)) {
    var data = fs.readFileSync(filename, 'utf-8');
    var users = JSON.parse(data);
    if (typeof users["kazman"] != 'undefined') {
        console.log(users["kazman"]["password"]);
    }
}
else {
    console.log(`${filename} file doesn't exist :(`);
}
