var querystring = require("querystring");
var fs = require('fs');

function start(response) {
    fs.readFile('index.html', function(err, data) {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        response.write(data);
        response.end();
    });
}

function upload(response, postData) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("You've sent the text: " +
        querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;
