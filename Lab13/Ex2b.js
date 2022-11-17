var fs = require('fs');
var filename = 'user_data.json';
if (fs.existsSync(filename)) {
    var data = fs.readFileSync(filename, 'utf-8');
    var file_stats = fs.statSync(filename);
    var users_data = JSON.parse(data);
    if (typeof users_data["kazman"] != 'undefined') {
        console.log(`${filename} is ${file_stats.size} bytes large`);
    } else {
        console.log(`${filename} file doesn't exist :(`);
    }
}